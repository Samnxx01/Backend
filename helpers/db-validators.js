import Role from '../models/role.js'
import Regis from '../models/regiUsu.js'
import IdUsu from '../models/regiUsu.js'
import Categoria   from '../models/categoria.js';
import CategoriaAzucar   from '../models/categoriaAzucar.js';
import archivo from '../models/modulo.js'
import administrativa from '../models/administrativa.js';
import asistencia from '../models/asistencia.js';
import calidad from '../models/calidad.js';
import diagnostico from '../models/diagnostico.js';
import financiera from '../models/financiera.js';
import juridica from '../models/juridica.js';
import mercadeo from '../models/mercadeo.js';
import partos from '../models/partos.js';
import promocion from '../models/promocion.js';
import riesgo from '../models/riesgo.js';
import talento from '../models/talento.js';
import tecnologia from '../models/tecnologia.js';
import planeacion from '../models/planeacion.js';
import urgencias from '../models/urgencias.js';


export  async function esRoleValido(rol = '') {
    const existeRole = await Role.findOne({ rol });
    if (!existeRole) {
        throw new Error(`El rol  no está registrado en la base de datos`);
    }
}
export  async function azucarValido(sinazucar = '') {
    const existeAzucar = await CategoriaAzucar.findOne({ sinazucar });
    if (!existeAzucar) {
        throw new Error(`la categoria  no está registrado sin azucar en la base de datos`);
    }
}

export async function existeIdDiagnostico(id) {
    const existeUsuario = await diagnostico.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdModulo(id) {
    const existeUsuario = await archivo.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdTalento(id) {
    const existeUsuario = await talento.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdFinanciera(id) {
    const existeUsuario = await financiera.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdPlaneacion(id) {
    const existeUsuario = await planeacion.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdTecnologia(id) {
    const existeUsuario = await tecnologia.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdUrgencias(id) {
    const existeUsuario = await urgencias.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdJuridica(id) {
    const existeUsuario = await juridica.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdRiesgos(id) {
    const existeUsuario = await riesgo.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdPartos(id) {
    const existeUsuario = await partos.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdMercadeo(id) {
    const existeUsuario = await mercadeo.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdAdministrativa(id) {
    const existeUsuario = await administrativa.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdAsistencial(id) {
    const existeUsuario = await asistencia.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdCalidad(id) {
    const existeUsuario = await calidad.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdPromocion(id) {
    const existeUsuario = await promocion.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}



export async function emailExiste(correo = '') {
    const existeEmail = await Regis.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo  ya existe`);
    }
}

export async function nombreArchivoExiste(nombre_archivo = '') {
    const existeArchivi = await archivo.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteAd(nombre_archivo = '') {
    const existeArchivi = await administrativa.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteAsis(nombre_archivo = '') {
    const existeArchivi = await asistencia.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteCali(nombre_archivo = '') {
    const existeArchivi = await calidad.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteDiag(nombre_archivo = '') {
    const existeArchivi = await diagnostico.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteFinan(nombre_archivo = '') {
    const existeArchivi = await financiera.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteJuri(nombre_archivo = '') {
    const existeArchivi = await juridica.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteMerca(nombre_archivo = '') {
    const existeArchivi = await mercadeo.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExistePartos(nombre_archivo = '') {
    const existeArchivi = await partos.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExistePlane(nombre_archivo = '') {
    const existeArchivi = await planeacion.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExistePromo(nombre_archivo = '') {
    const existeArchivi = await promocion.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteRiesgo(nombre_archivo = '') {
    const existeArchivi = await riesgo.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteTalen(nombre_archivo = '') {
    const existeArchivi = await talento.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteTecno(nombre_archivo = '') {
    const existeArchivi = await tecnologia.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}
export async function nombreArchivoExisteUrgen(nombre_archivo = '') {
    const existeArchivi = await urgencias.findOne({ nombre_archivo });
    if (existeArchivi) {
        throw new Error(`Ya existe el nombre con otro archivo ${nombre_archivo}`);
    }
}

export async function nombreExiste(nickname = '') {
    const nombreExiste = await Regis.findOne({ nickname });
    if (nombreExiste) {
        throw new Error(`El nombre  ya existe`);
    }
}
export async function nombreExisteCate(nombre = '') {
    const nombreExiste = await Categoria.findOne({ nombre });
    if (nombreExiste) {
        throw new Error(`El nombre  ya existe`);
    }
}



export async function existeIdUsuario(id) {
    const existeUsuario = await IdUsu.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function existeIdCategoria(id) {
    const existeUsuario = await Categoria.findById(id);
    // Si no se encuentra el usuario, simplemente retornamos false en lugar de lanzar un error
    return !!existeUsuario;
}
export async function coleccionesPermitidas(coleccion = '', colecciones = []) {
    
    const incluida = colecciones.includes(coleccion); // Corregir "incluides" a "includes"
    if (!incluida) {
        throw new Error(`La colección ${coleccion} no es permitida. Colecciones permitidas: ${colecciones}`)
    }
    return true;
    // Si no se encuentra la colección, simplemente retornamos false en lugar de lanzar un error
}



