// Funções Arrow (=>)
// Nas arrow functions (funções seta), o this é definido lexicalmente, isto é, seu valor é definido pelo contexto d execução onde está inserido. Em um código global, this assume o objeto glboal:

// Contexto de criação: global
const arrowFunctionThis = () => { console.log(this)}

// Contexto de criação: objeto / errado
const arrowFunctionThis = {
    prop: 150,
    arrowF: () => {console.log(this)}
}

// Contexto de criação: objeto / correto
const obj1 = {
    exemplo1: 'exemplo1',
    mostraThis: function() {
        console.log( (() => this)() )
    }
}


/* O modo estrito ajuda a capturar erros comuns de codificação e impede o uso de recursos problemáticos que podem levar a bugs. Por exemplo, ele não permite a atribuição de valores a variáveis não declaradas, o que ajuda a evitar a criação acidental de variáveis globais.O modo estrito ajuda a capturar erros comuns de codificação e impede o uso de recursos problemáticos que podem levar a bugs. Por exemplo, ele não permite a atribuição de valores a variáveis não declaradas, o que ajuda a evitar a criação acidental de variáveis globais. 

E como usar? Basta adicionar 'use strict' no topo do seu código, antes de qualquer outra coisa ou chama-los dentro de funções. Se você inserir dentro no topo do seu código se aplicará para todo seu código.E como usar? Basta adicionar 'use strict' no topo do seu código, antes de qualquer outra coisa ou chama-los dentro de funções. Se você inserir dentro no topo do seu código se aplicará para todo seu código.*/

// Quando não estiver no modo estrito o this apontará para o objeto global
function thisNaoEstrito() { console.log(this) }

// Em modo estrito, o valor de this peranece seja qual for o definido ao entrar no contexto de execução, assim, no caso a seguir, this por padrão será indefinido (undefined)

function thisEstrito() { 'use strict'; console.log(this) }

thisNaoEstrito()
thisEstrito()


// Como método de um objeto

const c = {
    prop: 100,
    f: function() {
        return this.prop
    }
}

console.log(o.f())


// Chamar o 'this' diretamente no console nos traz o objeto global do contexto em que o JavaScript está executando.

// O 'this' no devtools do chrome nos traz o objeto "window", no Node nos traz o objeto "global"

console.log(this.document === document)

// Em navegadores web, o objeto window é também o objeto global:
console.log(this === window) // true

this.a = 37
console.log(window.a) // 37