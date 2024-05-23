import { response } from 'express';
import moment from 'moment-timezone'; // Importa moment-timezone
import modulo from '../models/modulo.js';
import path from 'path'; // Importa el módulo path
import subirArchivos from '../helpers/subir-archivos.js';
import registUrosImg from '../models/regiUsu.js'
import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


var intra = {

  listarIntranet: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarIntranet = await modulo.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarIntranet,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },

  ListarArchivo: async (req, res = response) => {
    const { id, coleccion } = req.params;
    let subidaImg;

    switch (coleccion) {
      case 'registUros':
        subidaImg = await registUrosImg.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el usuario con el id ${id}` });
        }
        break;

      case 'modulo':
        subidaImg = await modulo.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el computador con el id ${id}` });
        }
        break;

      default:
        return res.status(500).json({ msg: 'Se me olvidó validar esto' });
    }

    const checkAndSendFile = (filePath, defaultFilePath) => {
      if (fs.existsSync(filePath)) {
        return res.sendFile(filePath);
      } else {
        return res.sendFile(defaultFilePath);
      }
    };

    const noImagePath = path.join(__dirname, '../assets/no-image.jpg');

    // Verificar y servir archivos PDF, XLSX, DOCX
    if (subidaImg.pdf) {
      const pathPdf = path.join(__dirname, '../img-subida', 'calidad', subidaImg.pdf);
      return checkAndSendFile(pathPdf, noImagePath);
    }

    if (subidaImg.xlsx) {
      const pathXlsx = path.join(__dirname, '../img-subida', 'calidad', subidaImg.xlsx);
      return checkAndSendFile(pathXlsx, noImagePath);
    }

    if (subidaImg.docx) {
      const pathDocx = path.join(__dirname, '../img-subida', 'calidad', subidaImg.docx);
      return checkAndSendFile(pathDocx, noImagePath);
    }

    return res.sendFile(noImagePath);
  },

  guadarIntranet: async (req, res = response) => {


    const { estado, registUros, ...body } = req.body;

    const fechaActual = new Date();

    const data = {
      ...body,
      nombre_archivo: body.nombre_archivo.toUpperCase(),
      descripcion: body.descripcion.toUpperCase(),
      fecha_carga: fechaActual,
      regisUsu: req.uid,
    };

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.imagen) {
      return res.status(400).send('No hay archivo para subir');
    }

    try {
      const archivoSubido = await subirArchivos(req.files, undefined, 'calidad');
      const extension = path.extname(archivoSubido).toLowerCase();

      // Asignar el archivo a la propiedad correspondiente según la extensión
      if (extension === '.pdf') {
        data.pdf = archivoSubido;
      } else if (extension === '.xlsx') {
        data.xlsx = archivoSubido;
      } else if (extension === '.docx') {
        data.docx = archivoSubido;
      } else {
        return res.status(400).json({ error: 'Formato de archivo no soportado' });
      }

      const nuevoDocumento = new modulo(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
}



export default intra;
