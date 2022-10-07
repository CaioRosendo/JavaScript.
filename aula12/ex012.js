var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são ${hora} horas.`)
if (hora < 6) {
    console.log ('Está de madrugada')
} else if (hora < 12) {
    console.log('Está de manhã') 
} else if (hora < 18) {
    console.log('Está a tarde')
} else {
    console.log('Está a noite')
}
