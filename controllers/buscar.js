import { response } from 'express';
import { Types } from 'mongoose';
import regiUsu from '../models/regiUsu.js';
import modulo from '../models/modulo.js';
import administrativa from '../models/administrativa.js';
import calidad from '../models/calidad.js';
import financiera from '../models/financiera.js';
import diagnostico from '../models/diagnostico.js';
import asistencia from '../models/asistencia.js';
import partos from '../models/partos.js';
import mercadeo from '../models/mercadeo.js';
import promocion from '../models/promocion.js';
import juridica from '../models/juridica.js';
import planeacion from '../models/planeacion.js';
import riesgo from '../models/riesgo.js';
import talento from '../models/talento.js';
import tecnologia from '../models/tecnologia.js';
import urgencias from '../models/urgencias.js';



//este controlador hacemos la busquedas por argumentos y colecciones
const { ObjectId } = Types;


/*const coleccionesPermitidasAdmin =[
    'regisUsu',
    'categorias',
    'productos'
]*/

const coleccionesPermitidasGenerales = [
    'RegisUsu',
    'modulo',
    'administrativa',
    'asistencia',
    'calidad',
    'diagnostico',
    'financiera',
    'mercadeo',
    'partos',
    'promocion',
    'planeacion',
    'riesgo',
    'talento',
    'tecnologia',
    'urgencias',
    'juridica'

]


var buscarID = {

    buscarJurdica: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoJuri = await juridica.findById(termino);
            return res.json({
                results: (archivoJuri) ? [archivoJuri] : []
            })
        }

        const regex = new RegExp(termino, 'i');

        const archivoJuris = await juridica.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoJuris
        })

    },
    buscarCalidad: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoCali = await calidad.findById(termino);
            return res.json({
                results: (archivoCali) ? [archivoCali] : []
            })

        }
        const regex = new RegExp(termino, 'i');

        const archivoCalida = await calidad.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoCalida
        })


    },
    buscarDiagnostico: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoDiag = await diagnostico.findById(termino);
            return res.json({
                results: (archivoDiag) ? [archivoDiag] : []
            })
        }
        const regex = new RegExp(termino, 'i');

        const archivoDiagn = await diagnostico.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoDiagn
        })




    },
    buscarAtencion: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoAten = await modulo.findById(termino);
            return res.json({
                results: (archivoAten) ? [archivoAten] : []
            })
        }
        const regex = new RegExp(termino, 'i');

        const archivoAtenc = await modulo.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoAtenc
        })

    },
    buscarMercadeo: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoMerca = await mercadeo.findById(termino);
            return res.json({
                results: (archivoMerca) ? [archivoMerca] : []
            })
        }

        const regex = new RegExp(termino, 'i');

        const archivoMercad = await mercadeo.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoMercad
        })

    },
    buscarPromocion: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoPro = await promocion.findById(termino);
            return res.json({
                results: (archivoPro) ? [archivoPro] : []
            })
        }
        const regex = new RegExp(termino, 'i');

        const archivoProm = await promocion.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoProm
        })

    },
    buscarUrgencias: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoUr = await urgencias.findById(termino);
            return res.json({
                results: (archivoUr) ? [archivoUr] : []
            })
        }
        const regex = new RegExp(termino, 'i');

        const archivoUrg = await urgencias.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoUrg
        })


    },
    buscarRiesgo: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoRiesgo = await riesgo.findById(termino);
            return res.json({
                results: (archivoRiesgo) ? [archivoRiesgo] : []
            })
        }

        const regex = new RegExp(termino, 'i');

        const archivoRiesg = await riesgo.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoRiesg
        })

    },
    buscarTalento: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoTalen = await talento.findById(termino);
            return res.json({
                results: (archivoTalen) ? [archivoTalen] : []
            })
        }

        const regex = new RegExp(termino, 'i');

        const archivoRiesg = await talento.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoRiesg
        })

    },
    buscarPartos: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoPartos = await partos.findById(termino);
            return res.json({
                results: (archivoPartos) ? [archivoPartos] : []
            })
        }
        const regex = new RegExp(termino, 'i');

        const archivoRiesg = await talento.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoRiesg
        })

    },
    buscarAsistencial: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoAsis = await asistencia.findById(termino);
            return res.json({
                results: (archivoAsis) ? [archivoAsis] : []
            })
        }

        const regex = new RegExp(termino, 'i');

        const archivoAsist = await asistencia.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoAsist
        })

    },
    buscarFincanciera: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoFinan = await financiera.findById(termino);
            return res.json({
                results: (archivoFinan) ? [archivoFinan] : []
            })
        }

        const regex = new RegExp(termino, 'i');

        const archivoFinanc = await financiera.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoFinanc
        })

    },
    buscarTecnologia: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoTecno = await tecnologia.findById(termino);
            return res.json({
                results: (archivoTecno) ? [archivoTecno] : []
            })
        }
        const regex = new RegExp(termino, 'i');

        const archivoTecnol = await tecnologia.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoTecnol
        })

    },

    buscarAdministrativa: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoAd = await administrativa.findById(termino);
            return res.json({
                results: (archivoAd) ? [archivoAd] : []
            })
        }
        const regex = new RegExp(termino, 'i');

        const archivoAdm = await administrativa.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoAdm
        })
    },
    buscarPlaneacion: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino);

        if (esMongoID) {

            const archivoPla = await planeacion.findById(termino);
            return res.json({
                results: (archivoPla) ? [archivoPla] : []
            })
        }
        const regex = new RegExp(termino, 'i');

        const archivoPlan = await planeacion.find({
            $or: [{ nombre_archivo: regex }, { descripcion: regex }],
            $and: [{ estado: true }]
        })
        return res.json({
            results: archivoPlan
        })


    },

}

var buscar = {


    buscarGeneral: async (req, res = response) => {
        const { coleccion, termino } = req.params;

        // Verifica si se proporciona una colección. Si no se proporciona, busca en todas las colecciones permitidas.
        const colecciones = coleccion ? [coleccion] : coleccionesPermitidasGenerales;

        try {
            let resultados = [];

            // Realiza la búsqueda en cada colección permitida
            for (const col of colecciones) {
                switch (col) {
                    case 'modulo':
                        resultados = [...resultados, await buscarID.buscarAtencion(termino)];
                        break;
                    case 'administrativa':
                        resultados = [...resultados, await buscarID.buscarAdministrativa(termino)];
                        break;
                    case 'asistencia':
                        resultados = [...resultados, await buscarID.buscarAsistencial(termino)];
                        break;
                    case 'diagnostico':
                        resultados = [...resultados, await buscarID.buscarDiagnostico(termino)];
                        break;
                    case 'financiera':
                        resultados = [...resultados, await buscarID.buscarFincanciera(termino)];
                        break;
                    case 'mercadeo':
                        resultados = [...resultados, await buscarID.buscarMercadeo(termino)];
                        break;
                    case 'partos':
                        resultados = [...resultados, await buscarID.buscarPartos(termino)];
                        break;
                    case 'promocion':
                        resultados = [...resultados, await buscarID.buscarPromocion(termino)];
                        break;
                    case 'planeacion':
                        resultados = [...resultados, await buscarID.buscarPlaneacion(termino)];
                        break;
                    case 'riesgo':
                        resultados = [...resultados, await buscarID.buscarRiesgo(termino)];
                        break;
                    case 'talento':
                        resultados = [...resultados, await buscarID.buscarTalento(termino)];
                        break;
                    case 'tecnologia':
                        resultados = [...resultados, await buscarID.buscarTecnologia(termino)];
                        break;
                    case 'urgencias':
                        resultados = [...resultados, await buscarID.buscarUrgencias(termino)];
                        break;
                    case 'juridica':
                        resultados = [...resultados, await buscarID.buscarJurdica(termino)];
                        break;

                    // Agrega casos para otras colecciones...
                    default:
                        console.warn(`La colección "${col}" no tiene una búsqueda definida.`);
                }
            }

            // Envía la respuesta solo una vez que se han procesado todas las colecciones
            res.json(resultados.flat());
        } catch (error) {
            console.error('Error al buscar documentos:', error);
            res.status(500).json({ msg: 'Error al buscar documentos' });
        }
    }
}


/*var buscarID = {


    buscarIDUsuario: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino); 

        if (esMongoID) {
            const BusquedaUsuario = await busquedaU.findById(termino);

            if (BusquedaUsuario) {
                return res.status(200).json({
                    msg: 'Búsqueda Exitosa de usuarios',
                    resultado: [BusquedaUsuario]
                });
            } else {
                return res.status(404).json({
                    msg: 'No se encontraron resultados'
                });
            }
        } else {
            const regex = new RegExp(termino, 'i');
            const BusquedaUsuario = await busquedaU.find({
                $or: [{ nickname: regex }, { correo: regex }],
                $and:[{estado:true}]
            });
    
            if (BusquedaUsuario.length > 0) {
                return res.status(200).json({
                    msg: 'Búsqueda Exitosa',
                    BusquedaUsuario
                });
            } else {
                return res.status(404).json({
                    msg: 'No se encontraron resultados'
                });
            }
           }
    },

   buscarIDCategoria: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino); 

        if (esMongoID) {
            const BusquedaCategoria = await busquedaC.findById(termino);

            if (BusquedaCategoria) {
                return res.status(200).json({
                    msg: 'Búsqueda Exitosa de categorias',
                    resultado: [BusquedaCategoria]
                });
            } else {
                return res.status(404).json({
                    msg: 'No se encontraron resultados'
                });
            }
        } else {
            const regex = new RegExp(termino, 'i');
            const BusquedaCategoria = await busquedaC.find({
                $or: [{ nombre: regex }, { referencia: regex }],
                $and:[{estado:true}]
            });
    
            if (BusquedaCategoria.length > 0) {
                return res.status(200).json({
                    msg: 'Búsqueda Exitosa',
                    BusquedaCategoria
                });
            } else {
                return res.status(404).json({
                    msg: 'No se encontraron resultados'
                });
            }
           }
    },
    
    buscarIDProducto: async (termino = '', res = response) => {

        const esMongoID = ObjectId.isValid(termino); 

        if (esMongoID) {
            const Productos = await busquedaP.findById(termino).populate('categoria', 'nombre')
            const disponible = await busquedaP.find({disponible:true})
                            
            if (Productos) {
                return res.status(200).json({
                    msg: 'Búsqueda Exitosa de usuarios',
                    disponible,
                    resultado: [Productos]
                });
            } else {
                return res.status(404).json({
                    msg: 'No se encontraron resultados'
                });
            }
        } else {
            const regex = new RegExp(termino, 'i');
            const Productos = await busquedaP.find({nombre:regex, disponible:true})
            .populate('categoria', 'nombre')
            .populate('regisUsu', 'nickname')
            
    
            if (Productos.length > 0) {
                return res.status(200).json({
                    msg: 'Búsqueda Exitosa',
                    Productos
                });
            } else {
                return res.status(404).json({
                    msg: 'No se encontraron resultados'
                });
            }
           }
    }
};*/





export { buscar, buscarID };
