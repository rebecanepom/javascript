let num = [5,8,2,9,3]
console.log(num)

num[5] = 6 // add o 6 na posição 5

num.push(7) // pra colocar o valor na ultima posição

num.length // tamanho
console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`) // mostra o valor na posição entre []

num.sort() // coloca os elementos em ordem crescente

console.log(`Nosso vetor é o ${num}`)

let pos = num.indexOf(4)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
