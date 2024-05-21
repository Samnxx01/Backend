import express from 'express';
import{ check } from'express-validator';
import validarCampos from '../middlewares/validar.campos.js'
import validarJWT from '../middlewares/validar-jwt-seguridad.js'
import {esRoleValido,nombreArchivoExiste} from '../helpers/db-validators.js';
import {existeIdUsuario} from '../helpers/db-validators.js';
import {esAdminRole} from '../middlewares/validar-roles.js';
import moduloArchivo from '../controllers/intranet-modulo.js'
//import {esTenerRoles} from '../middlewares/validar-roles.js'




var router = express.Router()


//definicion de rutas 





//rutas de registro
router.post('/guardararchivos/',[

    //validacion de campos
    check('nombre_archivo', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre_archivo', ).custom( nombreArchivoExiste),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarCampos,
], moduloArchivo.guadarIntranet)



//listar los registro
/*router.get('/listarRegistro',
 validarJWT,
 esAdminRole,
 )


//modificar registro

router.put('/modificar/:id',[
    validarJWT,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    esAdminRole,
    //esta pendiente el id que me arroje la modificacion 
    check('id', 'No es un ID valido').isMongoId(),
    check('rol', ).custom( esRoleValido),
    validarCampos
], registro.modificar);


router.delete('/eliminar/:id',[  
    validarJWT,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    esAdminRole,
    check('id', 'No es un ID valido').isMongoId(),
    check('id', ).custom( existeIdUsuario),
    validarCampos
],registro.eliminar)*/



export default router