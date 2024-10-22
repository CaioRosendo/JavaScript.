function Carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src ='imagens/manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#515154'
    }
}
