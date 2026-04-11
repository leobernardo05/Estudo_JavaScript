// tem que usar includes() no exercício
let produto = document.getElementById('produto')
let valor = document.getElementById('valor')
let quantidade = document.getElementById('quantidade')
let desconto = document.getElementById('desconto')


// class bd para salvar dados no localStorage e depois mostrar em adicionarLista
class Bd {
    constructor () {
        this.chave = 'carrinho'
    }

    buscar() {
        return JSON.parse(localStorage.getItem(this.chave) || [])
    }

    salvar(lista) {
        localStorage.setItem(this.chave, JSON.stringify(lista))
    }
}

let bd = new Bd ()


// função para adicionar a lista de compras
function adicionarLista () {

}

// tem que usar o localStorage
function somarProdutos () {
    let soma = Number(valor.value) * Number(quantidade.value)
    // tratativa de erros
    if (Number(valor.value) <= 0 ) {
        alert('digite um valor válido')
    }
    
    if (Number(quantidade.value) <= 0 ){
        alert('digite um valor válido')
    }
    
    if(produto == '') {
        alert('digite uma quantidade válida')
    }

    console.log(soma)
    

}

// função para aplicar desconto
function aplicarDesconto () {
    
}

