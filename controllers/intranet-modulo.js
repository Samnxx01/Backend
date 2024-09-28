import { response } from 'express';
import moment from 'moment-timezone'; // Importa moment-timezone
import modulo from '../models/modulo.js';
import calidad from '../models/calidad.js';
import financiera from '../models/financiera.js';
import juridica from '../models/juridica.js';
import tecnologia from '../models/tecnologia.js';
import promocion from '../models/promocion.js';
import asistencial from '../models/asistencia.js';
import diagnostica from '../models/diagnostico.js';
import riesgos from '../models/riesgo.js';
import partos from '../models/partos.js';
import urgencias from '../models/urgencias.js';
import talento from '../models/talento.js';
import mercadeo from '../models/mercadeo.js';
import administrativa from '../models/administrativa.js';
import planeacion from '../models/planeacion.js';
import path from 'path'; // Importa el módulo path
import subirArchivos from '../helpers/subir-archivos.js';
import registUrosImg from '../models/regiUsu.js';
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
  listarAdministrativa: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarAdministrativa = await administrativa.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarAdministrativa,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },

  listarAsistencial: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarAsistencial = await asistencial.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarAsistencial,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },

  listarCalidad: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarCalidad = await calidad.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarCalidad,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },
  listarFinanciera: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarFinanciera = await financiera.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarFinanciera,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },

  listarMercadeo: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarMercadeo = await mercadeo.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarMercadeo,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },
  listarPlaneacion: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarPlaneacion = await planeacion.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarPlaneacion,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },
  listarPartos: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarPartos = await partos.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarPartos,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },
  listarRiesgos: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarRiesgos = await riesgos.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarRiesgos,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },
  listarJuridica: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarJuridica = await juridica.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarJuridica,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },

  listarTalento: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarTalento = await talento.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarTalento,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },
  listarUrgencias: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarUrgencias = await urgencias.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarUrgencias,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },
  listarPromocion: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarPromocion = await promocion.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarPromocion,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },
  listarTecnologia: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarTecnologia = await tecnologia.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarTecnologia,

      });
    } catch (error) {
      console.error('Error en la operación:', error);
      res.status(500).json({
        error: 'Hubo un error en la operación',
      });
    }
  },
  listarDiagnostico: async (req, res = response) => {
    try {
      // Obtiene todos los registros de la colección
      const query = { estado: true }

      const listarDiagnostico = await diagnostica.find(query)




      // Envía los registros como respuesta en formato JSON
      res.status(200).json({
        msg: 'Listado Exitoso',
        listarDiagnostico,

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
      case 'RegisUsu':
        subidaImg = await registUrosImg.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el usuario con el id ${id}` });
        }
        break;

      case 'modulo':
        subidaImg = await modulo.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo de atencion con el id ${id}` });
        }
        break;
      case 'administrativa':
        subidaImg = await administrativa.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo administrativo con el id ${id}` });
        }
        break;
      case 'asistencia':
        subidaImg = await asistencial.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo asistencia con el id ${id}` });
        }
        break;
      case 'calidad':
        subidaImg = await calidad.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo calidad con el id ${id}` });
        }
        break;
      case 'diagnostico':
        subidaImg = await diagnostica.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo diagnostico con el id ${id}` });
        }
        break;
      case 'financiera':
        subidaImg = await financiera.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo financiera con el id ${id}` });
        }
        break;
      case 'mercadeo':
        subidaImg = await mercadeo.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo mercadeo con el id ${id}` });
        }
        break;
      case 'partos':
        subidaImg = await partos.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo partos con el id ${id}` });
        }
        break;
      case 'promocion':
        subidaImg = await promocion.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo promocion con el id ${id}` });
        }
        break;
      case 'planeacion':
        subidaImg = await planeacion.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo planeacion con el id ${id}` });
        }
        break;
      case 'riesgo':
        subidaImg = await riesgos.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo riesgo con el id ${id}` });
        }
        break;
      case 'talento':
        subidaImg = await talento.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo talento con el id ${id}` });
        }
        break;
      case 'tecnologia':
        subidaImg = await tecnologia.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo tecnologico con el id ${id}` });
        }
        break;
      case 'urgencias':
        subidaImg = await urgencias.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo urgencias con el id ${id}` });
        }
        break;
      case 'juridica':
        subidaImg = await juridica.findById(id);
        if (!subidaImg) {
          return res.status(400).json({ msg: `No existe el archivo juridica con el id ${id}` });
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
  /*1*/
  guadarIntranet: async (req, res = response) => {


    const { estado, regisUsu, ...body } = req.body;

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
  /*2*/
  guadarAdministra: async (req, res = response) => {


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

      const nuevoDocumento = new administrativa(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*3*/
  guadarCalidad: async (req, res = response) => {


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

      const nuevoDocumento = new calidad(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*4*/
  guadarFinanciera: async (req, res = response) => {


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

      const nuevoDocumento = new financiera(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*5*/
  guadarMercadeo: async (req, res = response) => {


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

      const nuevoDocumento = new mercadeo(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*6*/
  guadarPlaneacion: async (req, res = response) => {


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

      const nuevoDocumento = new planeacion(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*7*/
  guadarPartos: async (req, res = response) => {


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

      const nuevoDocumento = new partos(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*8*/
  guadarRiesgo: async (req, res = response) => {


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

      const nuevoDocumento = new riesgos(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*9*/
  guadarAsistencial: async (req, res = response) => {


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

      const nuevoDocumento = new asistencial(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*10*/
  guadarJuridica: async (req, res = response) => {


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

      const nuevoDocumento = new juridica(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*11*/
  guadarTalento: async (req, res = response) => {


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

      const nuevoDocumento = new talento(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.status(200).json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*12*/
  guadarUrgencias: async (req, res = response) => {


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

      const nuevoDocumento = new urgencias(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*13*/
  guadarPromocion: async (req, res = response) => {


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

      const nuevoDocumento = new promocion(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*14*/
  guadarTecnologia: async (req, res = response) => {


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

      const nuevoDocumento = new tecnologia(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },
  /*15*/
  guadarDiagnostico: async (req, res = response) => {


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

      const nuevoDocumento = new diagnostica(data);
      const guardadoDocumento = await nuevoDocumento.save();

      res.json({ guardadoDocumento });

    } catch (error) {
      console.error('Error al guardar el archivo de extension png, jpg:', error);
      res.status(500).json({ error: 'Error al guardar el archivo' });
    }
  },

  eliminarIntranet: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarIntranet = await modulo.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarIntranet

    })
  },

  eliminarAdministrativa: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarAdministrativa = await administrativa.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarAdministrativa

    })
  },

  eliminarAsistencial: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarAsistencial = await asistencial.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarAsistencial

    })
  },
  eliminarCalidad: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarCalidad = await calidad.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarCalidad

    })
  },
  eliminarFincnaciera: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarFinanciera = await financiera.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarFinanciera

    })
  },
  eliminarMercadeo: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarMercadeo = await mercadeo.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarMercadeo

    })
  },
  eliminarPlaneacion: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarPlaneacion = await planeacion.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarPlaneacion

    })
  },

  eliminarPartos: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarPartos = await partos.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarPartos

    })
  },
  eliminarRiesgos: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarRiesgos = await riesgos.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarRiesgos

    })
  },
  eliminarJuridica: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarJuridica = await juridica.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarJuridica

    })
  },

  eliminarTalento: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarTalento = await talento.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarTalento

    })
  },

  
  eliminarUrgencias: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarUrgencias = await urgencias.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarUrgencias

    })
  },
  eliminarPromocion: async (req, res) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarPromocion = await promocion.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarPromocion

    })
  },

  eliminarTecnologia: async (req, res = response) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarTecnologia = await tecnologia.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarTecnologia

    })
  },

  eliminarDiagnostico: async (req, res = response) => {

    const { id } = req.params;


    //fisicamnente lo borramos del modelo
    const elimininarDiagnostico = await diagnostica.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'se ha eliminado',
      elimininarDiagnostico

    })
  },

  
}



export default intra;
