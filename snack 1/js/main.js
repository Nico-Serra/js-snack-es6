console.log('hello');

/*
SNACK 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const auto = [
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'metano'
    },
    {
        marca: 'Fiat',
        modello: 'Tipo',
        alimentazione: 'diesel'
    },
    {
        marca: 'Fiat',
        modello: '500',
        alimentazione: 'elettrica'
    },
    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'benzina'
    },
    {
        marca: 'Fiat',
        modello: 'Bravo',
        alimentazione: 'diesel'
    },
    {
        marca: 'Fiat',
        modello: '600',
        alimentazione: 'gpl'
    },
    {
        marca: 'Lancia',
        modello: 'Delta',
        alimentazione: 'diesel'
    },
    {
        marca: 'Lancia',
        modello: 'ypsilon',
        alimentazione: 'gpl'
    },
    {
        marca: 'Alfa Romeo',
        modello: 'Mito',
        alimentazione: 'metano'
    },
    {
        marca: 'Alfa Romeo',
        modello: 'Giulietta',
        alimentazione: 'diesel'
    },

]



const autoBenzina = auto.filter(car => car.alimentazione === 'benzina')

console.log(autoBenzina);

const autoDiesel = auto.filter(car => car.alimentazione === 'diesel')

console.log(autoDiesel);

const otherCar = auto.filter(car => car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel')

console.log(otherCar);
