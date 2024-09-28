import { response } from 'express'
import jwt from 'jsonwebtoken'
import registroAu from '../models/regiUsu.js'


const validarJWT = async (req, res, next) => {

    const token = req.header('metasploit');
    if (!token) {
      return res.status(401).json({
        msg: 'No hay token en la petición'
      });
    }
  
    try {
      // Verifica si el token tiene el prefijo Bearer y lo separa
      const bearerToken = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;
  
      const { uid } = jwt.verify(bearerToken, process.env.SECRETKEY);
      
     // Añade esto para verificar el UID
  
      const registrosUsu = await registroAu.findById(uid);
  
      // Verificar si el usuario existe
      if (!registrosUsu) {
        return res.status(401).json({
          msg: 'Token no válido - Usuario no existe'
        });
      }
  
      // Verificar si el estado del usuario es activo
      if (!registrosUsu.estado) {
        return res.status(401).json({
          msg: 'Token no válido - Usuario inactivo'
        });
      }
  
      req.registrosUsu = registrosUsu;
      next();
    } catch (error) {
      console.error(error.message);
      res.status(401).json({
        msg: 'Token no válido'
      });
    }
  };
  export default validarJWT;