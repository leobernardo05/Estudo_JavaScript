// tem que usar includes() e implementar uma parte para desconto  
function adicionarLista () {
    let produto = document.getElementById('produto')
    let valor = document.getElementById('valor')
    let quantidade = document.getElementById('quantidade')

}

class Bd {

}

// tem que usar o localStorage
function somarProdutos () {
    let produto = document.getElementById('produto')
    let valor = document.getElementById('valor').value
    let quantidade = document.getElementById('quantidade').value
    let soma = valor*quantidade
    // tratativa de erros
    if (valor <= 0 ) {
        alert('digite um valor válido')
    }

    if (quantidade <= 0 ){
        alert('digite um valor válido')
    }

    if(produto == '') {
        alert('digite uma quantidade válida')
    }

    let bd = new Bd()
}