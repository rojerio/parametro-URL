const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
    const id = req.params.id // consultar no banco de dados o ID
    console.log(`estamos buscando pelo usuario : ${id}`)
    res.sendFile(`${basePath}/users.html`)// mandar um arquivo para "basepath" que busca o arquvo principal
})

app.post('/users/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    console.log(name)
    console.log(email)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})
