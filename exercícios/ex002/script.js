function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var nasc = document.getElementById('iano')
    var res = document.getElementById('res')
    if(nasc.value.length == 0 || nasc.value > ano) {
        window.alert (`[ERRO] verifique os dados e tente novamente.`)
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute ('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src','criança-homem.jpg')
            } else if (idade < 18) {
                img.setAttribute('src','jovem-homem.jpg')
            } else if (idade < 60) {
                img.setAttribute('src','homem.jpg')
            } else {
                img.setAttribute('src','idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero ='Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src','criança-mulher.jpg')
            } else if (idade < 18) {
                img.setAttribute('src','jovem-mulher.jpg')
            } else if (idade < 60) {
                img.setAttribute('src','mulher.jpg')
            } else {
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}