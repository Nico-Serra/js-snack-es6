console.log('hello');

/*

Crea un array di oggetti che rappresentano delle persone.

Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

*/

const persons = [
    {
        name: 'Nicola',
        surname: 'Serra',
        age: 23,
    },
    {
        name: 'Nic',
        surname: 'Ra',
        age: 18,
    },
    {
        name: 'Lapo',
        surname: 'Terra',
        age: 53,
    },
    {
        name: 'Franco',
        surname: 'Franco',
        age: 25,
    },
    {
        name: 'Ernesto',
        surname: 'Franco',
        age: 15,
    },
    {
        name: 'Francesca',
        surname: 'Franchi',
        age: 17,
    },
    {
        name: 'Fabio',
        surname: 'Franzo',
        age: 5,
    },
    {
        name: 'Fabiola',
        surname: 'Franto',
        age: 22,
    },
    {
        name: 'Luca',
        surname: 'Fo',
        age: 45,
    },
    {
        name: 'Lucia',
        surname: 'Forti',
        age: 14,
    },
]

console.log(persons);

//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const driverList = persons.map(function(person){
    let driver;
    if (person.age >= 18) {
        driver = 'puo guidare perche è maggiorenne'
    }else{driver = 'non puo guidare perche è minorenne'}
    const sentence = `${person.name} ${person.surname} ${driver}`
    return sentence
})

console.log(driverList);

