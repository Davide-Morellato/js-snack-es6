// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.


const vipGuests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
]

//creo due variabili per il tavolo e il posto a sedere
let table = 'Tavolo VIP' ;
let sit = 0 ;

//creo un array vuoto in cui inserire gli oggetti creati
let assignGuests = [];

//creo un ciclo for in cui prendo i singoli elementi dell'array
for(let i = 0; i < vipGuests.length; i++){

    //creo una variabile per il singolo elemento dell'array
    let guest = vipGuests[i]

    //indico che il posto a sedere deve incrementare per ogni elemento
    sit++

    //creo un oggetto per modificare l'array di stringhe in array di oggetti in console
    const assign = {
        guestTable: table,
        guestName: guest,
        guestSit: sit,
    }
    
    //aggiungo l'oggetto all'array di oggetti
    assignGuests.push(assign)
}

console.log(assignGuests)