import express from 'express';
import{ check } from'express-validator';
import validarCampos from '../middlewares/validar.campos.js'
import validarJWT from '../middlewares/validar-jwt-seguridad.js'
import {esRoleValido,existeIdAdministrativa,existeIdAsistencial,existeIdCalidad,existeIdDiagnostico,existeIdFinanciera,existeIdMercadeo,existeIdModulo,existeIdPartos,existeIdPromocion,existeIdRiesgos,existeIdTalento,existeIdTecnologia,existeIdUrgencias,nombreArchivoExiste, nombreArchivoExisteAd, nombreArchivoExisteAsis, nombreArchivoExisteCali, nombreArchivoExisteDiag, nombreArchivoExisteFinan, nombreArchivoExisteJuri, nombreArchivoExisteMerca, nombreArchivoExistePartos, nombreArchivoExistePlane, nombreArchivoExistePromo, nombreArchivoExisteRiesgo, nombreArchivoExisteTalen, nombreArchivoExisteTecno, nombreArchivoExisteUrgen} from '../helpers/db-validators.js';
import {existeIdUsuario} from '../helpers/db-validators.js';
import {esAdminRole} from '../middlewares/validar-roles.js';
import moduloArchivo from '../controllers/intranet-modulo.js'
import validarArchivosSubir from '../middlewares/validar-archivos.js';
//import {esTenerRoles} from '../middlewares/validar-roles.js'




var router = express.Router()


//definicion de rutas 

router.get('/modulo/listararchivos',[
   
], moduloArchivo.listarIntranet)


router.get('/administrativa/listararchivos',[

], moduloArchivo.listarAdministrativa)

router.get('/asistencial/listararchivos',[

], moduloArchivo.listarAsistencial)

router.get('/calidad/listararchivos',[

], moduloArchivo.listarCalidad)

router.get('/financiera/listararchivos',[

], moduloArchivo.listarFinanciera)

router.get('/mercadeo/listararchivos',[

], moduloArchivo.listarMercadeo)

router.get('/planeacion/listararchivos',[

], moduloArchivo.listarPlaneacion)

router.get('/partos/listararchivos',[

], moduloArchivo.listarPartos)

router.get('/riesgos/listararchivos',[

], moduloArchivo.listarRiesgos)


router.get('/juridica/listararchivos',[

], moduloArchivo.listarJuridica)

router.get('/talento/listararchivos',[

], moduloArchivo.listarTalento)


router.get('/urgencias/listararchivos',[

], moduloArchivo.listarUrgencias)

router.get('/promocion/listararchivos',[

], moduloArchivo.listarPromocion)

router.get('/tecnologia/listararchivos',[

], moduloArchivo.listarTecnologia)

router.get('/diagnostico/listararchivos',[

], moduloArchivo.listarDiagnostico)











//rutas de registro
/* 1*/
router.post('/atencion/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExiste),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarIntranet)

/* 3*/
router.post('/administrativa/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExisteAd),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarAdministra)

/* 4*/
router.post('/calidad/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExisteCali),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarCalidad)

/* 7*/
router.post('/financiera/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExisteFinan),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarFinanciera)

/* 7*/
router.post('/mercadeo/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExisteMerca),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarMercadeo)


/* 15*/
router.post('/planeacion/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExistePlane),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarPlaneacion)

/* 6*/
router.post('/partos/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo').custom( nombreArchivoExistePartos),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarPartos)
/* 6*/

router.post('/riesgos/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExisteRiesgo),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarRiesgo)


/* 2*/
router.post('/asistencial/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExisteAsis),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarAsistencial)

/* 10*/
router.post('/juridica/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExisteJuri),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarJuridica)

/* 9*/
router.post('/talento/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExisteTalen),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarTalento),

/* 11*/
router.post('/urgencias/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExisteUrgen),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarUrgencias)

/* 12*/
router.post('/promocion/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', 'el nombre no se puede repetir').custom( nombreArchivoExistePromo),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarPromocion)

/* 13*/
router.post('/tecnologia/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', 'el nombre no se puede repetir').custom(nombreArchivoExisteTecno),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarTecnologia)


/* 5*/
router.post('/diagnostico/guardararchivos/',[
    validarJWT,
    esAdminRole,
    check('nombre_archivo', ).custom( nombreArchivoExisteDiag),
    check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
    validarArchivosSubir,
    validarCampos,
], moduloArchivo.guadarDiagnostico)


router.delete('/administrativa/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdAdministrativa),
    validarCampos

], moduloArchivo.eliminarAdministrativa)

router.delete('/asistencial/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdAsistencial),
    validarCampos

], moduloArchivo.eliminarAsistencial)

router.delete('/tecnologia/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdTecnologia),
    validarCampos

], moduloArchivo.eliminarTecnologia)

router.delete('/promocion/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdPromocion),
    validarCampos

], moduloArchivo.eliminarPromocion)

router.delete('/atencion/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdModulo),
    validarCampos

], moduloArchivo.eliminarIntranet)

router.delete('/riesgo/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdRiesgos),
    validarCampos

], moduloArchivo.eliminarRiesgos)

router.delete('/financiera/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdFinanciera),
    validarCampos

], moduloArchivo.eliminarFincnaciera)

router.delete('/diagnostico/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdDiagnostico),
    validarCampos

], moduloArchivo.eliminarDiagnostico)

router.delete('/talento/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdTalento),
    validarCampos

], moduloArchivo.eliminarTalento)

router.delete('/urgencias/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdUrgencias),
    validarCampos

], moduloArchivo.eliminarUrgencias)

router.delete('/mercadeo/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdMercadeo),
    validarCampos

], moduloArchivo.eliminarMercadeo)

router.delete('/partos/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdPartos),
    validarCampos

], moduloArchivo.eliminarPartos)


router.delete('/calidad/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdCalidad),
    validarCampos

], moduloArchivo.eliminarCalidad)

router.delete('/juridica/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdCalidad),
    validarCampos

], moduloArchivo.eliminarJuridica)
router.delete('/planeacion/eliminarDocumentos/:id', [
    validarJWT,
    esAdminRole,
    //esTenerRoles('USUARIO','ADMINISTRADOR_ROLE'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id',).custom(existeIdCalidad),
    validarCampos

], moduloArchivo.eliminarPlaneacion)










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