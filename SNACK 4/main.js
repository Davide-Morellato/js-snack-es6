// SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare,
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array
// i cui elementi contengono solo nomi e falli subiti
// e stampiamo tutto in console.




//creo un array di oggetti squadre

const clubs = [
    {
        team: 'Roma',
        scores: 0,
        foulsDrawn: 0,
    },

    {
        team: 'Fiorentina',
        scores: 0,
        foulsDrawn: 0,
    },

    {
        team: 'Inter',
        scores: 0,
        foulsDrawn: 0,
    },

    {
        team: 'Juvnetus',
        scores: 0,
        foulsDrawn: 0,
    },

    {
        team: 'Milan',
        scores: 0,
        foulsDrawn: 0,
    },

    {
        team: 'Napoli',
        scores: 0,
        foulsDrawn: 0,
    },
]

console.log(clubs)



//creo ciclo for per generare i valori random per le chiavi degli oggetti
for(let i = 0; i < clubs.length; i++){
    
    //prendo il singolo elemento
    const club = clubs[i]

    //genero i numeri random per i punti e falli subiti
    club.scores = Math.floor(Math.random() * 150)

    club.foulsDrawn = Math.floor(Math.random() * 80)
}

//stampo in console l'array con i numeri generati
console.log(clubs)




//creo un nuovo array con l'utilizzo di map
const newClubs = clubs.map((club) => {

    //destrutturizzazione dell'oggetto con soli nome e falli subiti
    const {team, foulsDrawn} = club

    //return nome e falli
    return{
        team,
        foulsDrawn,
    }

})

//stampo il nuovo array
console.log(newClubs)