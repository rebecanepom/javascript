/* const soma = function(v1,v2) {return v1+v2}
console.log(soma(2, 5)) */

const soma = (v1, v2) => {return v1 + v2}
console.log(soma(40, 1))

// Quando só tem um parâmetro não precisa usar ()
const nome = n => {return n}
console.log(nome('Choi'))

// Não precisa usar a palavra "return", qnd usar sem o "return" n colocar {}
const add = valor => valor + 5
console.log(add(20))