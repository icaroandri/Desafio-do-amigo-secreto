
let ListaDosnomes = [];
let novoNome = '';

function adicionarAmigo() {
    novoNome = document.getElementById('amigo').value;  
    if (novoNome === '') {
        alert('Por favor, insira um nome.');  
    } else {
        ListaDosnomes.push(novoNome);  
        console.log(ListaDosnomes); 
        adicionarAmigosNaLista(ListaDosnomes);
        
       
    }
  
    document.getElementById('amigo').value = ''; 
}




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


