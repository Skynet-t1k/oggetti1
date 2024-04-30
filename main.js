// Crea un oggetto persona con le seguenti caratteristiche:
// nome
// cognome
// eta'
// un metodo che permetta di salutare


let persona ={
    nome : "Giuseppe",
    cognome : "Cattano",
    age: 46,
    saluta(){
        console.log(`Ciao mi chiamo ${this.nome} ${this.cognome} ho ${this.age} anni, piacere di conoscerti`);
    },
}


persona.saluta();