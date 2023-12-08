/* Diferença entre CONST e LET
const: não consegue alterar depois
let: consegue alterar depois
EX: */
/* aqui da erro
const msg = 'Helo world!'
msg = 'ola'
alert(msg) */

/* let msg = 'Helo world!'
msg = 'ola'
alert(msg) */

// STRINGS
/* const msg = 'Hello World!'
console.log(msg.length) */ //tamanho 

const firstName = 'Bibi'
const lastName = 'Perigosa'
const names = 'Jungkook,Hyun Wook,Joo Hyuk'

console.log('Meu nome é ' + firstName + ' ' + lastName) //concatenação
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`)

console.log(names.split(","))