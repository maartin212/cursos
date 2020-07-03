/*
const http = require('http')

http.createServer((req, res) => {
    res.end('Hello world!')
}).listen(3000)
*/

const express = require('express')
const morgan = require('morgan')

const app = express()

// Settings
app.set('appName', 'Express Server')
app.set('views', `${__dirname}/views`)
app.set('view engine', 'ejs')

const routes = require('./routes.js')
const routesApi = require('./routes-api.js')


// Middlewares
app.use(morgan('tiny'))

/*
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`)
    next()
})

app.use((req, res, next) => {
    console.log(`REQ: ${req}`)
    next()
})
*/

// Routes
app.use(routes)
app.use('/api', routesApi)

app.get('*', (req, res) => {
    res.end('Archivo no encontrado')
})



app.listen(3000, () => {
    console.log('Server running on port: 3000')
    console.log(`Nombre de la app: ${app.get('appName')}`)
})