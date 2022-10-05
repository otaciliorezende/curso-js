let num = [8, 9 ,7 ,5 ,2]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(7)
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 7 está na posição ${pos}`)
}
