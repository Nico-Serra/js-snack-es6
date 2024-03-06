console.log('hello world');

/*

snack-2-b5
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/

const zucchine = [
    {
        varietà: 'Zucchina nera',
        peso: 100,
        lunghezza: 25

    },
    {
        varietà: 'Zucchina napoletana',
        peso: 80,
        lunghezza: 22

    },
    {
        varietà: 'Zucchina tonda',
        peso: 150,
        lunghezza: 14

    },
    {
        varietà: 'Zucchina tombetta',
        peso: 120,
        lunghezza: 32

    },
    {
        varietà: 'Zucchina romanesca',
        peso: 70,
        lunghezza: 7

    },
    {
        varietà: 'Zucchina trombetta',
        peso: 172,
        lunghezza: 13

    },
    {
        varietà: 'Zucchina gialla',
        peso: 80,
        lunghezza: 13

    },
    {
        varietà: 'Zucchina verde',
        peso: 140,
        lunghezza: 21

    },
    {
        varietà: 'Zucchina',
        peso: 150,
        lunghezza: 14

    },
    {
        varietà: 'Zucca',
        peso: 100,
        lunghezza: 27

    },
]

console.log(zucchine);

const zucchineLong = zucchine.filter(zucchina => zucchina.lunghezza > 15)

console.log(zucchineLong);

const zucchineShort = zucchine.filter(zucchina => zucchina.lunghezza < 15)

console.log(zucchineShort);

let sumZucchineLong = 0;

let sumZucchineShort = 0;

zucchineShort.forEach(zucchinaShort => sumZucchineShort += zucchinaShort.peso)

zucchineLong.forEach(zucchinaLong => sumZucchineLong += zucchinaLong.peso)

console.log(`Il peso totale delle zucchine >15 cm è ${sumZucchineLong} g`);

console.log(`Il peso totale delle zucchine <15 cm è ${sumZucchineShort} g`);