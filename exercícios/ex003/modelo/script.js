function contar(){
    var ini = document.querySelector('input#inicio')
    var fim = document.getElementById('fim')
    var pas = document.querySelector('input#passo')
    var res = document.querySelector('div#res')


    if (ini.value.length == 0 || fim.value.length == 0 ) {
     window.alert('ERRO, FALTAM NUMEROS.')
    } else {
        res.innerHTML = `Contando:  `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0) {
            window.alert(`Considerando PASSO 1`)
            p = 1
        }
        if (i < f) {
            // crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c}, \u{1F449}`
            }
        } else {
            // regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c}, \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
        
