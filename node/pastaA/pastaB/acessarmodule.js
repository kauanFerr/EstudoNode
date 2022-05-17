const moduleA = require('../../moduleA')

console.log(moduleA.ola)

const c =require('./pastaC/index') //nao precisa definir o index, quando utiliza o require, mas o nome da pasta index, tem que estar certa

const http = require('http')
http.createServer((req, res) => {
    res.write(`${c.ola2}`)
    res.end()
}).listen(8999)

//acessando modulos internos por require