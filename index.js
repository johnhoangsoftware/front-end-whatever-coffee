const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hoang', (req, res) => { res.send('Hello Hoang') })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})