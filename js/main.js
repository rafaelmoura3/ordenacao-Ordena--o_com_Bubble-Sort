let listar = document.querySelector(".listar");
let ordenar_id_btn = document.querySelector(".ordenar-option .ordenar-id");

//teste desordenado
const listaClientes = [
    { id: 5, nome: "Lucas" },
    { id: 1, nome: "João" },
    { id: 3, nome: "Maria" },
    { id: 2, nome: "Adalberto" },
    { id: 100, nome: "Igor" },
    { id: 4, nome: "Samantha" },
    { id: 9, nome: "Eliomar" },
    { id: 20, nome: "Janescleiton" }
];

//teste ordenado
const listaCliente = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Adalberto" },
    { id: 3, nome: "Maria" },
    { id: 4, nome: "Samantha" },
    { id: 5, nome: "Lucas" },
    { id: 9, nome: "Eliomar" },
    { id: 20, nome: "Janescleiton" },
    { id: 100, nome: "Igor" }
];

//Evento de Ordenacao
//let click = true;
ordenar_id_btn.addEventListener('click', () =>{ 
    for (let i = 0, size = listaClientes.length; i < listaClientes.length  - 1; i++){
        let ordenado = 0;
        for (let j = 0; j < size - 1 - i; j++){
            if (listaClientes[j].id > listaClientes[j + 1].id)
            {
                let aux = listaClientes[j];
                listaClientes[j] = listaClientes[j + 1];
                listaClientes[j + 1] = aux;
                console.log("desordenado");
                ordenado = 1;
            }
        }
            if(ordenado == 0){
                console.log("ordenado");
                displayList(listaClientes);
            }
    }
});

//Exibir intens
function displayList(array = []){
    listar.innerHTML = "";

    for(let i = 0; i < array.length; i++){
        let cliente = array[i];

        let cliente_element = document.createElement('div');
        cliente_element.classList.add('listar-cliente');

        let id  = document.createElement('div');
        id.classList.add('cliente-id');
        id.innerText = cliente.id;

        cliente_element.appendChild(id);

        let nome  = document.createElement('div');
        nome.classList.add('cliente-nome')
        nome.innerText = cliente.nome;

        cliente_element.appendChild(nome);

        listar.appendChild( cliente_element);
    }
}
displayList(listaClientes);