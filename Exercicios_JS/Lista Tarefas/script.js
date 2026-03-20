// função a qual vai inserir os dados e salvar no localstorage
function inserirAtividades (){
    let titulo = document.getElementById('titulo').value
    let descricao = document.getElementById('descricao').value
  
    // objeto literal tarefa tarefa a qual irá receber os dados
    let tarefa = {
            titulo: titulo,
            descricao: descricao
    }
    // gerar id unique
    let id = Date.now()

    if (titulo === '' || descricao === '') {
        alert('preencha os campos')
        return
    }
    // salvar no local storage
        localStorage.setItem(id, JSON.stringify(tarefa)) //tinha que converter para string
    
    document.getElementById('titulo').value = ''
    document.getElementById('descricao').value = ''
}

// função a qual vai listar as atividades em forma de lista estilizada como um input
function mostrarAtividades(){
    let lista = document.getElementById('lista')
    // limpa a lista
    lista.innerHTML = ''

    // loop para percorrer o local storage
    for (let i = 0;i < localStorage.length;i++) {
        let chave = localStorage.key(i)
        // recuperar tarefas
        let tarefa = JSON.parse(localStorage.getItem(chave))

        // criar elemento
        let item = document.createElement('div')

        item.innerHTML = `
            <strong>${tarefa.titulo}</strong>
            <p>${tarefa.descricao}</p>
        `
        item.classList.add("card", "p-2", "mt-1")
        item.style.width = "400px"
        item.style.borderRadius = "20px"
        // adicionar na tela 
        lista.appendChild(item)
    }

}


