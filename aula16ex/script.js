let num = document.querySelector('input#nums').value
let lista = document.querySelector('select#tabela')
let res = document.querySelector('div#res')
let valores = []

function add() {
    if (num > 100 || num < 1 || num.length == 0) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        tab.appendChild(item)
        

        function finaliza() { 
            if(tab.length == 0) {
                alert('Adicione valores antes de finalizar!')
            } else {
                
                valores.push(num)
                for (let pos = 0; pos < valores.length; pos++) {
                    res.innerHTML = `A posição ${pos} tem o valor ${valores}`
                    /* valores[pos] */
                } 
            }  
            
        }
        
    }

    
}