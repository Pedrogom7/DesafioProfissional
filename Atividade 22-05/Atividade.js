/* 
Map(2) {
    'Frutas' => [
        { nome: 'Maça', categoria: "Frutas" },
        { nome: 'Banana', categoria: "Frutas" },
    ],
        'Legumes' => [
            { nome: 'Cenoura', categoria: "Legumes" },
            { nome: 'Brocolis', categoria: "Legumes" },
        ]
}
*/

const produtos = [
    { nome: "Maça", categoria: "Frutas" },
    { nome: "Banana", categoria: "Frutas" },
    { nome: "Cenoura", categoria: "Legumes" },
    { nome: "Brocolis", categoria: "Legumes" }
]

function agruparPorCategoria(produtos) {
    const categoriaMap = new Map()
    for (const produto of produtos) {
        const categoria = produto.categoria
        if (!categoriaMap.has(categoria)) {
            categoriaMap.set(categoria, [])
        }
        categoriaMap.get(categoria).push(produto)
    }
    return categoriaMap
}

const produtosAgrupdos = agruparPorCategoria(produtos)
console.log(produtosAgrupdos)