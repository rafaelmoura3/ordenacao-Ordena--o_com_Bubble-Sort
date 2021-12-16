class ListaClientes{
    
    constructor() {
        
        this._listaClientes = [
            { id: 5, nome: "Lucas" },
            { id: 1, nome: "João" },
            { id: 3, nome: "Maria" },
            { id: 2, nome: "Adalberto" },
            { id: 100, nome: "Igor" },
            { id: 4, nome: "Samantha" },
            { id: 9, nome: "Eliomar" },
            { id: 20, nome: "Janescleiton" }
        ];
        Object.freeze(this);
    }


    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }
}