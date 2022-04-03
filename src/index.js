const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//http Logger
app.use(morgan('combined'))

// Template enginer
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hoang', (req, res) => { res.render('Home') })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})