console.log('hello');

/*

Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

*/

const zucchine = [
    {
        varietà: 'Zucchina nera',
        peso: 100,
        lunghezza: '25cm'

    },
    {
        varietà: 'Zucchina napoletana',
        peso: 80,
        lunghezza: '22cm'

    },
    {
        varietà: 'Zucchina tonda',
        peso: 150,
        lunghezza: '14cm'

    },
    {
        varietà: 'Zucchina tombetta',
        peso: 120,
        lunghezza: '32cm'

    },
    {
        varietà: 'Zucchina romanesca',
        peso: 70,
        lunghezza: '7cm'

    },
    {
        varietà: 'Zucchina trombetta',
        peso: 172,
        lunghezza: '13cm'

    },
    {
        varietà: 'Zucchina gialla',
        peso: 80,
        lunghezza: '13cm'

    },
    {
        varietà: 'Zucchina verde',
        peso: 140,
        lunghezza: '21cm'

    },
    {
        varietà: 'Zucchina',
        peso: 150,
        lunghezza: '14cm'

    },
    {
        varietà: 'Zucca',
        peso: 100,
        lunghezza: '27cm'

    },
]

console.log(zucchine);

let sum = 0
zucchine.forEach((zucchina) => {
    console.log(zucchina.peso); 
    sum += zucchina.peso
})

console.log(`Il peso totale delle zucchine è di ${sum} g`);