console.log('hello world');

/*
snack3-b5
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

const userWord = prompt('Scrivi qui una parola')

function reverseWord(userWord) {
    
    const userWordRevers = userWord.split('').reverse().join('')

    return userWordRevers
}

console.log(reverseWord(userWord));