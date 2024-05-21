import { response } from 'express';
import moment from 'moment-timezone'; // Importa moment-timezone
import modulo from '../models/modulo.js';
import subirArchivos from '../helpers/subir-archivos.js';

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

    guadarIntranet: async (req, res = response) => {


        const { estado,registUros, ...body } = req.body;

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
          const archivoSubido = await subirArchivos(req.files, undefined, 'prueba');
          data.archivo = archivoSubido; // Añadir el nombre del archivo subido a la data
      
          const nuevoComputador = new modulo(data);
          const guardadoDocumento = await nuevoComputador.save();
      
          res.json({ guardadoDocumento });
        } catch (error) {
          console.error('Error al guardar el archivo:', error);
          res.status(500).json({ error: 'Error al guardar el archivo' });
        }
      },    
}



export default intra;
