const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname)

app.get('/users/:id', (req, res) => {
    const id = req.params.id // consultar no banco de dados o ID
    console.log(`estamos buscando pelo usuario : ${id}`)
    res.sendFile(`${basePath}/form.html`)// mandar um arquivo para "basepath" que busca o arquvo principal
})

app.post('/users/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    console.log(name)
    console.log(age)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})

app.use(
  express.urlencoded({
      extended:true,
  }),
)

app.use(express.json())

app.use(express.static('public'))