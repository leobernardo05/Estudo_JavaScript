let produto = document.getElementById('produto')
let valor = document.getElementById('valor')
let quantidade = document.getElementById('quantidade')
let desconto = document.getElementById('desconto')

class Bd {
    constructor() {
        this.chave = 'carrinho'
    }

    buscar() {
        return JSON.parse(localStorage.getItem(this.chave)) || []
    }

    salvar(lista) {
        localStorage.setItem(this.chave, JSON.stringify(lista))
    }
}

let bd = new Bd()

function adicionarLista() {

    let lista = bd.buscar()

    let nomeProduto = produto.value.trim()
    let valorProduto = Number(valor.value)
    let qtdProduto = Number(quantidade.value)

    if (!nomeProduto || valorProduto <= 0 || qtdProduto <= 0) {
        alert("Preencha corretamente os campos")
        return
    }

    // verificar duplicado usando includes
    let nomes = lista.map(item => item.nome)

    if (nomes.includes(nomeProduto)) {
        alert("Produto já existe no carrinho")
        return
    }

    let item = {
        nome: nomeProduto,
        valor: valorProduto,
        quantidade: qtdProduto
    }

    lista.push(item)

    bd.salvar(lista)

    atualizarLista()
    limparCampos()
}

function atualizarLista() {

    let lista = bd.buscar()
    let ul = document.getElementById("lista")

    ul.innerHTML = ""

    for (let item of lista) {

        let li = document.createElement("li")

        li.innerHTML = `
            ${item.nome} - R$ ${item.valor} x ${item.quantidade}
            <button onclick="removerItem('${item.nome}')">X</button>
        `

        ul.appendChild(li)
    }

    somarProdutos()
}

function removerItem(nome) {

    let lista = bd.buscar()

    lista = lista.filter(item => item.nome !== nome)

    bd.salvar(lista)

    atualizarLista()
}

function somarProdutos() {

    let lista = bd.buscar()
    let total = 0

    for (let item of lista) {
        total += item.valor * item.quantidade
    }

    document.getElementById("resultado").innerText = total.toFixed(2)
}

function aplicarDesconto() {

    let valorDesconto = Number(desconto.value)

    if (valorDesconto <= 0) {
        alert("Digite um desconto válido")
        return
    }

    let lista = bd.buscar()
    let total = 0

    for (let item of lista) {
        total += item.valor * item.quantidade
    }

    let novoTotal = total - valorDesconto

    if (novoTotal < 0) novoTotal = 0

    document.getElementById("resultado").innerText = novoTotal.toFixed(2)
}

function limparCampos() {
    produto.value = ""
    valor.value = ""
    quantidade.value = ""
    desconto.value = ""
}

atualizarLista()