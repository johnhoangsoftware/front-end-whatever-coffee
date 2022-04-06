const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const routes = require('./routes/index')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//http Logger
app.use(morgan('combined'))

// Template enginer
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main" }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Routes
routes(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})