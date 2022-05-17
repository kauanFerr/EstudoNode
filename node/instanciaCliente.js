const contadorA = require('./instaciaUnica')
const contadorB = require('./instaciaUnica')

const contadorC = require('./instaciaNova')()
const contadorD = require('./instaciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.value,contadorB.value)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)

