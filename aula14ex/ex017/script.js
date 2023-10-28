function tabuada() {
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#tab')

    let n = Number(num.value)
    let c = 1
    while (c <= 10) {
        let item = document.createElement('option')
        tab.innerHTML = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
}