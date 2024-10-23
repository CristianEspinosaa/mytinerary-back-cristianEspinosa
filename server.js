import express from 'express'
import 'dotenv/config.js'
import './config/dataBase.js'
import indexRouter from './router/index.js'
import cors from 'cors'
import morgan from 'morgan'
import error_404 from './middlewares/error_404.js'
import error_400 from './middlewares/error_400.js'
import error_500 from './middlewares/error_500.js'

const server = express()

const PORT = process.env.PORT

const ready = () => {
    console.log("Estoy corriendo en el puerto" + PORT)    
}



server.use(express.json())
server.use(express.urlencoded({extended : true}))
server.use(cors())
server.use(morgan('dev'))


server.use('/api', indexRouter)
server.use(error_404)
server.use(error_400)
server.use(error_500)





server.listen(PORT, ready )