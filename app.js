//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

/// teste 

let ListaDosnomes = [];
let novoNome = '';
let teste = 100 ; 

function adicionarAmigo() {
    novoNome = document.getElementById('amigo').value;  // Pega o valor do input
    if (novoNome === '') {
        alert('Por favor, insira um nome.');  // Se o campo estiver vazio, alerta o usuário
    } else {
        ListaDosnomes.push(novoNome);  // Adiciona o nome à lista
        console.log(ListaDosnomes); 
        
        // Mostra a lista atualizada no console
    }
    // Limpa o campo de input após adicionar o nome (opcional)
    document.getElementById('amigo').value = ''; 
}

// sortear nome


function sortearAmigo() {

    let tamFun = ListaDosnomes.length;
    console.log(tamFun);
    if (tamFun > 0 ){
        let numeroSorteio = Math.floor(Math.random() * tamFun)
        let nomeSorteado = ListaDosnomes[numeroSorteio]
        console.log (nomeSorteado) ; 

        document.getElementById('resultado').innerHTML = `Amigo sorteado: ${nomeSorteado}`

    } else {
        alert('A lista está vazia piá')
    }
    
 }

