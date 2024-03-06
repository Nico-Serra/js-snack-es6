console.log('hello world');

/*

SNACK 5

Creare un array di oggetti:

Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare in console la bici con peso minore utilizzando destructuring e template literal

*/

const bici = [
    {
        nome: 'Bici Elettrica',
        peso: 23,
    },
    {
        nome: 'Mountain Bike',
        peso: 15,
    },
    {
        nome: 'Bici da corsa',
        peso: 7,
    },
    {
        nome: 'BMX',
        peso: 17,
    },
    {
        nome: 'Bici ibrida',
        peso: 20,
    },
]

/*let lightBike = 30
bici.forEach(bici => {
    if (bici.peso < lightBike) {
        lightBike = bici.peso
    }
})*/

let [,,{nome}] = bici
let [,,{peso}] = bici

console.log(`la bici con il peso minore è ${nome} con il peso di ${peso} kg`);

let markup = `la bici con il peso minore è ${nome} con il peso di ${peso} kg`;

document.querySelector('.container').insertAdjacentHTML('beforeend', markup)