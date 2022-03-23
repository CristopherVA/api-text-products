require('dotenv').config()
const express = require('express')
const bodyParser =  require('body-parser')
const cors = require('cors')

const conection = require('./db/config')
const port = process.env.PORT_WEB

const app = express()
    
// // Conexion a la base de datos
conection()

//  CORS
app.use(cors())

// BODY PARSE PARA TRABAJAR CON JSON
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Directorio publico
app.use(express.static('public'))

// Rutas
app.use('/api/productos', require('./routes/productosRouter'))

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
})