const marvel_heroes = ["Iron Man","Thor","Hella","Captain Marvel","Hulk","Hawk Eye"]
const dc_heroes = ["Batman","Superman","Green-Arrow","Flash","Wonder-Women","Aquaman","Cyborg"]
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//console.log(marvel_heroes[6][0]);


const allHeroes = marvel_heroes.concat(dc_heroes);
//console.log(allHeroes);

const allnewheroes = [...marvel_heroes, ...dc_heroes]
console.log(allnewheroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flatArray = anotherArray.flat(Infinity);
console.log(flatArray);
console.log( Array.isArray("Nouman"))
console.log( Array.from("Nouman"))
console.log(Array.from({name:"Nouman Haider"})); // interesting for interviews point of view

let score1 = 100
let score2 = 130
let score3 = 250
const scoreArray = Array.of(score1,score2,score3);
console.log(scoreArray);
