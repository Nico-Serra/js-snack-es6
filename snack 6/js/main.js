console.log('hello world');

/*
SNACK 6

Creare un array di oggetti di squadre di calcio.

Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
    {
        name:'Real Madrid',
        points: getRandomNumber(1,100),
        foulSuffered: getRandomNumber(1,100),
        
    },
    {
        name:'Girona',
        points: getRandomNumber(1,100),
        foulSuffered: getRandomNumber(1,100),
        
    },
    {
        name:'Barcelona',
        points: getRandomNumber(1,100),
        foulSuffered: getRandomNumber(1,100),
        
    },
    {
        name:'Real Sociedad',
        points: getRandomNumber(1,100),
        foulSuffered: getRandomNumber(1,100),
    },
    {
        name:'Atlethic Madrid',
        points: getRandomNumber(1,100),
        foulSuffered: getRandomNumber(1,100),
        
    },
    {
        name:'Getafe',
        points: getRandomNumber(1,100),
        foulSuffered: getRandomNumber(1,100),
        
    },
    {
        name:'Valencia',
        points: getRandomNumber(1,100),
        foulSuffered: getRandomNumber(1,100),
        
    },
    {
        name:'Rayo Valleyano',
        points: getRandomNumber(1,100),
        foulSuffered: getRandomNumber(1,100),
        
    },
    {
        name:'Villareal',
        points: getRandomNumber(1,100),
        foulSuffered: getRandomNumber(1,100),
        
    },
    {
        name:'Real Betis',
        points: getRandomNumber(1,100),
        foulSuffered: getRandomNumber(1,100),
        
    },
]

console.log(teams);

/*const newTeams = teams.map(team => {
    delete team.points
    
    return team
})*/

//let [{points}] = teams


//const newTeams = teams.map(team => team.name + ' ' + `Falli subiti = ${team.foulSuffered}`)

let [{names}] = teams
let [{foulSuffered}] = teams

const newTeams = teams.map(team => {
    names = team.name
    foulSuffered = team.foulSuffered
    
    return names + ' ' + foulSuffered
})

console.log(newTeams);






function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }