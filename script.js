console.log('Js Ok');

const list = [
    {
        text: 'Schierare la formazione al Fantacalcio',
        done: true,
    },
    {
        text: 'Studiare Vue Js',
        done: true,
    },
    {
        text: 'Fare la Lavatrice',
        done: true,
    },
    {
        text: 'Fare la spesa',
        done: true,
    },
    {
        text: 'Pagare Sky',
        done: true,
    },
    {
        text: 'Guardare il Trono di Spade',
        done: false,
    },
    {
        text: 'Giocare a Call of Duty',
        done: false,
    },
    {
        text: 'Andare al Kartodromo',
        done: false,
    }
];

//MILESTONE 1
//Stampare all'interno di una lista, un item per ogni todo.
//Se la proprietà done è uguale a true,
//visualizzare il testo del todo sbarrato. --> FATTO!!

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x":
// cliccando su di essa, il todo viene rimosso dalla lista. --> FATTO

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi":
// cliccando sul pulsante,
// il testo digitato viene letto e utilizzato per creare un nuovo todo,
// che quindi viene aggiunto alla lista dei todo esistenti. --> FATTO


// 1 BONUS- oltre al click sul pulsante,
// intercettare anche il tasto ENTER
//  per aggiungere il todo alla lista --> FATTO

// 2 BONUS- cliccando sul testo dell'item,
// invertire il valore della proprietà done del todo corrispondente 
// (se done era uguale a false, impostare true e viceversa)


const app = new Vue({
    el: '#root',
    //*********************** DATA ******************/ 
    data: {
        list,
        valoreInput: '',
    },
    //*********************** METHODS ******************/ 
    methods: {
        aggiungiClasse(elementiDone) {
            if (elementiDone === true) {
                return 'text-decoration-line-through text-danger'
            }
        },

        rimuoviLista(indiceElementi) {
            this.list.splice(indiceElementi, 1);
            // console.log(indiceElementi)
            // console.log(this.list)
            // console.log(this.list[0].text);
        },

        aggiungoOggetto() {

            if (this.valoreInput.length > 0) {
                const nuovoOggetto = {
                    text: this.valoreInput,
                    done: false,
                }
                this.valoreInput = '';
                this.list.push(nuovoOggetto);
                console.log(nuovoOggetto);
            }
        },
        cambioBooleana(indice) {

            if (this.list[indice].done === false) {
                this.list[indice].done = true;
            } else {
                this.list[indice].done = false;
            }
        }
    }
});