// Chamar o 'this' diretamente no console nos traz o objeto global do contexto em que o JavaScript está executando.

// O 'this' no devtools do chrome nos traz o objeto "window", no Node nos traz o objeto "global"

console.log(this.document === document)

// Em navegadores web, o objeto window é também o objeto global:
console.log(this === window) // true

this.a = 37
console.log(window.a) // 37