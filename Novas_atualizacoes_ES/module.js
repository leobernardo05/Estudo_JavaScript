console.log('Módulo importado');

export async function fetchDados (){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Executou')
        }, 3000)
    })
}

const dados = await fetchDados() //aguarda a resolução da promise de forma mais enxuta
console.log(dados)

console.log('fim do processamento')

/*export async function aguardarPromessa() {
    consnole.log('inicio do processamento')

    function fetchDados(){
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve('Executou')
            },3000)
        })
    }
    //aguardamos pelo processamento
    //no contexto da função
    const dados = await fetchDados() 
    console.log(dados)

    console.log('fim do processamento')
}

aguardarPromessa()*/