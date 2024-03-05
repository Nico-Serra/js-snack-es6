console.log('hello');

/*
snack 2
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
*/

const names = ['pippo', 'PLUTO', 'Paperino']

console.log(names);

const newNames = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())

console.log(newNames);
