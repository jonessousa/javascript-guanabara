let valores = [1,5,8,3,9,4]

/*for(let pos = 0; pos < valores.length; pos ++) {
    console.log(`O vetor na posição ${pos}, tem valor ${valores[pos]}`)
}*/

for(let pos in valores) { // para cada pos in valores
    console.log(`O vetor na posição ${pos}, tem valor ${valores[pos]}`)
}

