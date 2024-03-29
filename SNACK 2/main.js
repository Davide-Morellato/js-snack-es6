// *SNACK 2*
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// Questo è l’elenco degli studenti:
// Id   Name                    Grades
// 213  Marco della Rovere      78
// 110  Paola Cortellessa       96
// 250  Andrea Mantegna 	      48
// 145  Gaia Borromini          74
// 196  Luigi Grimaldello 	  68
// 102  Piero della Francesca   50
// 120  Francesca da Polenta    84



//creo un array di oggetti con gli studenti

const students = [
    {
        id: '213',
        name: 'Marco della Rovere',
        grades: 78,
    },

    {
        id: '110',
        name: 'Paola Cortellessa',
        grades: 96,
    },

    {
        id: '250',
        name: 'Andrea Mantegna ',
        grades: 48,
    },

    {
        id: '145',
        name: 'Gaia Borromini',
        grades: 74,
    },

    {
        id:'196',
        name: 'Luigi Grimaldello',
        grades: 68,
    },

    {
        id: '102',
        name: 'Piero della Francesca',
        grades: 50,
    },

    {
        id: '120',
        name: 'Francesca da Polenta',
        grades: 84,
    },
]

console.log(students)


// Stampare le targhe col nome degli studenti:
// creare una lista contenente il loro nome tutto in maiuscolo

//creo una variabile con cui rimappo l'array di oggetti,
//ritornando solo gli elementi con la chiave "name" e che siano maiuscole [.toUpperCase()] 
const upperName = students.map((el) =>{

    return {
        id: el.id,
        name: el.name.toUpperCase(),
        grades: el.grades,
    }

});

console.log(upperName)




// Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

//creo una variabile con cui filtro l'array di oggetti,
//ritornando solo gli elementi la cui chiave "grades" sia maggiore di 70
let studentsGrades = students.filter((el) => el.grades > 70)
console.log(studentsGrades)



// Creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

//creo una variabile con cui filtro l'array di oggetti,
//ritornando solo gli elementi le cui chiavi "grades" & "id"
//siano rispettivamente maggiore di 70 e 120
let studentsGradesId = students.filter((el) => el.grades > 70 && el.id > 120)
console.log(studentsGradesId)