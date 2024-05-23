import express from 'express';
import{ check } from'express-validator';
import validarCampos from '../middlewares/validar.campos.js'
import moduloArchivo from '../controllers/intranet-modulo.js'
import { coleccionesPermitidas } from '../helpers/db-validators.js';

//import {esTenerRoles} from '../middlewares/validar-roles.js'




var router = express.Router()


//definicion de rutas 

router.get('/:coleccion/:id', [
    check('id', 'El id debe ser mongo').isMongoId(),
    check('coleccion').custom(c => coleccionesPermitidas(c,['registUros', 'modulo'])),
    validarCampos
 ], moduloArchivo.ListarArchivo)




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