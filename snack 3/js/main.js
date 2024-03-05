console.log('hello world');

/*

SNACK 3

Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

Crea un nuovo array con la lista dei mammiferi.

*/

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'piccione', famiglia: 'colombidi', classe: 'uccelli' },
    { nome: 'lupo', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'elefante', famiglia: 'elefantidi', classe: 'mammiferi' },
    { nome: 'aquila', famiglia: 'accipitridi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'giraffa', famiglia: 'giraffidi', classe: 'mammiferi' },
  ]

  console.log(animals);

  const mammals = animals.filter(animal => animal.classe === 'mammiferi')

 console.log(mammals);