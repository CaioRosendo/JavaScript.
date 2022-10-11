function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('inasc')
    var res = window.document.getElementById ('resultado')
    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert ('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = window.document.querySelector('img#foto')
     if (fsex[0].checked) {
        genero = 'homem'
        if (idade >= 0 && idade < 10) {
            img.src ='criança-homem.jpg'
        } else if (idade >= 10 && idade < 21) {
            // jovem
            img.src ='jovem-homem.jpg'
        } else if (idade >= 21 && idade < 65) {
            img.src ='homem.jpg'
            // homem 
        } else if (idade >= 65) {
            img.src ='idoso.jpg'
            // idoso(a)
        }
    
    }   else if (fsex[1].checked) {
        genero = 'mulher'
        if (idade >= 0 && idade < 10) {
            img.src ='criança-mulher.jpg'
            // criança
        } else if (idade >= 10 && idade < 21) {
            img.src ='jovem-mulher.jpg'
        // jovem
        } else if (idade >= 21 && idade < 65) {
            img.src ='mulher.jpg'
        // homem ou mulher
        } else if (idade >= 65) {
            img.src ='idosa.jpg'
        // idoso(a)
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML =`você é ${genero} e tem ${idade} anos`
    res.appendChild(img)
    }
}