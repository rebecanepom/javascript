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


let a = 5
let b = 10
// Vários argumentos
let c = (num1, num2) => num1 + num2
console.log(c(a,b))

let d = (x, y) => {
    let op
    if (x > 5) {
        op = x * y
    } else {
        op = x / y
    }
    return op
}

console.log(d(a, b))

// um argumento
let frase = 'Queria estar assistindo dorama!'

let fraseArray = (frase) => frase.split(' ')

console.log(fraseArray(frase))

// sem argumento
let semArg = () => console.log('Não tenho argumentos')

semArg()

// Casos de uso
let roupas = [
    {produto: 'Camisa', preco: 25, cor: 'Azul bebe'},
    {produto: 'Calça', preco: 80, cor: 'Preto'},
    {produto: 'Jaqueta', preco: 100, cor: 'Preto'},
    {produto: 'Vestido', preco: 55, cor: 'Lilás'},
    {produto: 'Short', preco: 45, cor: 'Jeans'}
]

let precoMaiorQue50 = roupas.filter((roupa => {
    return roupa.preco >= 50
}))

console.log(precoMaiorQue50)

setTimeout(() => {
    console.log('Deu tempo!')
}, 1000)


// NÃO USAR ARROW 
let pessoa = {
    nome: 'Jungkook'
    sayName: () => {
        console.log(this.nome)
        console.log(this)
    }
}

pessoa.sayName()