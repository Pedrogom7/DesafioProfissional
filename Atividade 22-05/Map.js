let produtos = new Map()

produtos.set('chave1', "Mouse")
produtos.set('chave2', "Teclado")
produtos.set('chave3', "Monitor")
produtos.set('chave4', "Monitor")
produtos.set('chave5', "Valor5")

console.log(produtos)

console.log(produtos.get('chave1'))
console.log(produtos.has('chave1'))
console.log(produtos.size)

for (let chave of produtos.keys()) {
    console.log(valor)
}

for (let [chave, valor] of produtos.entries()) {
    console.log(chave, valor)
}
