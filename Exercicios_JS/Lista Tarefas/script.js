// class bd salva as atividades no local storage
class Bd {
    constructor (){
        this.id = id
    }
    salvar(id){
        localStorage.setItem(id) + 1
    }

}

// objeto do banco de dados simples salvo no local storage
let bd = new Bd()

// class tarefa a qual irá receber os dados - eu acho
class Tarefa {
    constructor () {

    }
}

// objeto da classe tarefa
let tarefa = new Tarefa()

// função a qual vai inserir os dados e salvar no localstorage
function inserirAtividades (){
    let titulo = document.getElementById('titulo').value
    let descricao = document.getElementById('descricao').value
    bd.salvar()
}

// função a qual vai listar as atividades em forma de lista estilizada como um input
function mostrarAtividades(){
    alert('função acionada')
}


