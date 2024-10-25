var num = [5,4,8,3,7,1,9,6,2]
// num.sort()
console.log(`Nosso vetor tem ${num.length} posições `)
for(var pos in num) {
    console.log(`a posicão ${pos} tem o  valor ${num[pos]}`)
}

console.log (`o 7 está na posição ${num.indexOf(7)}.`) 