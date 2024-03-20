// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal


const bikes = [
    {
        brand: 'Anakin',
        weight: 18,
    },

    {
        brand: 'Drugo',
        weight: 22,
    },

    {
        brand: 'Sparrow',
        weight: 16,
    },
    
    {
        brand: 'Rocket',
        weight: 12,
    },
    
    {
        brand: 'Hannibal',
        weight: 23,
    },
    
    {
        brand: 'Jones',
        weight: 25,
    },
]


// trovare la bici con il peso minore
    //scorrere l'array di oggetti
    //isolare il primo elemento
    //compararlo con gli altri


//
// VERSIONE CICLO for
//

// creo una variabile che indichi come primo elemento di riferimento [0]
// il primo oggetto dell'array 'bikes'
let ligthestBike = bikes[0]; //object


// creo un ciclo for per scorrere l'array di oggetti
for(let i = 0; i < bikes.length; i++){

    //creo una variabile per il singolo oggetto dell'array
    const bike = bikes[i]

    //se il peso del singolo oggetto dell'array è minore del peso dell'oggetto di riferimento 'bikes[0]'
    if(bike.weight < ligthestBike.weight){

        //allora devo sostituirlo a quell'elemento
        ligthestBike = bike
    }

}

//stampo in console l'oggetto col peso più leggero
console.log(ligthestBike)

//stampo in console il peso minore
console.log(ligthestBike.weight)



// DESTRUCTURING OBJECT

//creo una variabile al cui interno dichiaro le chiavi dell'oggetto con il peso più basso
const { brand, weight } = ligthestBike

//stampo in console l'esito del destructuring indicando il brand e il peso
console.log(`La bici con il peso minore è: ${brand}, col peso di ${weight}`)





//
// VERSIONE forEach
//


// creo una variabile che indichi come primo elemento di riferimento [0]
// il primo oggetto dell'array 'bikes'
let ligthestBikeForEach = bikes[0]; //object

//creo il ciclo forEach
//dichiaro l'elemento a cui farò riferimento
//arrow function
bikes.forEach((bike) => {

    if(bike.weight < ligthestBikeForEach.weight){
        ligthestBikeForEach = bike
    }
})

//stampo in console l'oggetto col peso più leggero
console.log(ligthestBikeForEach)

//stampo in console l'esito del destructuring indicando il brand e il peso
console.log(`La bici con il peso minore è: ${ligthestBikeForEach.brand}, col peso di ${ligthestBikeForEach.weight}`)