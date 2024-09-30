import express from 'express'
import morgan from 'morgan'
import {Server } from 'socket.io'
import http from 'http'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import router from './routes/apis.js'
import login from './routes/auth.js'
import categorias from './routes/categorias.js'
import buscador from './routes/buscarArchivos.js'
import intranet from './routes/intranet-libreria.js'
import documentos from './routes/documentos-subidos.js'
import dot from 'dotenv'
import fileUpload from 'express-fileupload'
//import db from './database/db.js'

//configuracion a mongoose
mongoose.Promise = global.Promise 

const app = express()



//Creamos el servidor con el modulo http
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
    },
})

//conexion de middlewares
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    createParentPath: true

}));
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/api', router)
app.use('/api/auth', login)
app.use('/api/categorias', categorias)
app.use('/api/documentos', intranet)
app.use('/api/documentos/archivos', documentos)
app.use('/api/buscador', buscador)




io.on('connection', (socket)=>{
    console.log(socket.id)
    console.log("Cliente conectado")


    socket.on('message',(message,nickname)=>{
        socket.broadcast.emit('message',{
            body: message,
            from: nickname
        })
    })
})



//variables de entorno
dot.config();
const url = process.env.MONGODB_URI; 
const PORT = process.env.PORT;
const dbName = process.env.DBNAME




//conexion a la BDD Y PETICIONES
mongoose.connect(url,{useNewUrlParser:true, dbName: dbName}).then(()=>{
    console.log('Conexion a la db exitosa')
    server.listen(PORT, ()=>{
        console.log('servidor ejecutandose en http://localhost',PORT)
    })
})