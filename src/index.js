const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

//http Logger
app.use(morgan('combined'))

// Template enginer
//app.engine('handlebars', handlebars())
//app.set('view engine', 'handlebars')
//app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hoang', (req, res) => { res.render('Home') })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})