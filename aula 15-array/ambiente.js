var num = [9,3,4,1,5]
num.push(7)
num.sort()
console.log(num)
console.log (`O vetor tem ${num.length} posições`)
console.log (`O primeiro vetor é: ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O valor está na posição ${pos}`)
}