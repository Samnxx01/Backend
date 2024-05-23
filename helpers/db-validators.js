import Role from '../models/role.js'
import Regis from '../models/regiUsu.js'
import IdUsu from '../models/regiUsu.js'
import Categoria   from '../models/categoria.js';
import CategoriaAzucar   from '../models/categoriaAzucar.js';
import archivo from '../models/modulo.js'


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



