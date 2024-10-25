function gerar() {
    var num = document.querySelector('input#inicio')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert(`Digite um número`)
    }  else {
        var n = Number(num.value)
    }
    tab.innerHTML = ''
    for (var c = 1; c <= 10; c++) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
    }
}