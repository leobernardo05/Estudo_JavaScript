export function getEnderecoByCEP(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`) //api de cep 
        .then(response => response.json())   
}