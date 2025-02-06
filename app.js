
let ListaDosnomes = [];
let novoNome = '';

function adicionarAmigo() {
    novoNome = document.getElementById('amigo').value;  // Pega o valor do input
    if (novoNome === '') {
        alert('Por favor, insira um nome.');  // Se o campo estiver vazio, alerta o usuário
    } else {
        ListaDosnomes.push(novoNome);  // Adiciona o nome à lista
        console.log(ListaDosnomes); 
        adicionarAmigosNaLista(ListaDosnomes);
        
        // Mostra a lista atualizada no console
    }
    // Limpa o campo de input após adicionar o nome (opcional)
    document.getElementById('amigo').value = ''; 
}

// sortear nome


function sortearAmigo() {

    let tamFun = ListaDosnomes.length;
    console.log(tamFun);
    listaAmigos.innerHTML = "";
    

    if (tamFun > 0 ){
        let numeroSorteio = Math.floor(Math.random() * tamFun)
        let nomeSorteado = ListaDosnomes[numeroSorteio]
        console.log (nomeSorteado) ; 
        document.getElementById('resultado').innerHTML = `Amigo sorteado: ${nomeSorteado}`

         ListaDosnomes = [];


        

        

    } else {
        alert('A lista está vazia piá')
    }
    
 }

 function adicionarAmigosNaLista(amigos) {
    // 1. Obter o elemento da lista
    const listaAmigos = document.getElementById('listaAmigos'); 
  
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
      const nomeAmigo = amigos[i];
  
      const novoItemLista = document.createElement('li');

      novoItemLista.textContent = nomeAmigo; 
      listaAmigos.appendChild(novoItemLista);
    }
  }

  //testee


