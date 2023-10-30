function tabuada() {
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#tab')
    
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = `` // antes de mostrar a tab vai limpar a área
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //valor das options
            tab.appendChild(item)
            c++
        }
    }

    
}