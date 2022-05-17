const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancodedados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : true}))

app.get('/produtos', (req, res, next) =>{
  res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)// converter em json para encaminhar para a web
});

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)// converter em json para encaminhar para a web
});

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)// converter em json para encaminhar para a web
});

// app.get('/produtos', (req, res, next) =>{
//     console.log('middleware 1...')
//     next()// se não colocar o next, fica carregando e nã entra no proximo
// })
//
// app.get('/produtos', (req, res, next) =>{
//     res.send({
//         nome: 'notebook',
//         preco: 3000.00
//     })// converter para json
// })

app.listen(porta, () =>{
    console.log(`servidor executando na porta ${porta}.`)
})
