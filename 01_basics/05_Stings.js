const name = "Nouman haider"
const repocount = 8
console.log(name + " total repositories are "+ repocount);


// below is the moderen syntax called string interpolation

console.log(`hello my name is ${name} and my repositories are ${repocount}`);

const game = new String('Nouman-Haider')
console.log(game[0]);
console.log(game.__proto__)
console.log(game.length)
console.log(game.toUpperCase())
console.log(game);
console.log(game.charAt(2));
console.log(game.indexOf('m'));
const newstring = game.substring(0,6)
console.log(newstring);

const anotherString = game.slice(-12,8)
console.log(anotherString);

const newStringOne = new String("Nouman   haider   this              is  amazing")
console.log(newStringOne.trim());
const strings = "   Nouman   haider   this              is  amazing   "
console.log(strings.trim());
const gamename = new String("street fighter 2")
console.log(gamename);
console.log(typeof(gamename));
console.log(gamename.toLocaleUpperCase());
const url = "https://numan.com/numan%20haider"
console.log(url.replace('%20','-'))
console.log(url);
console.log(url.includes('numan'))
console.log(gamename.split(' '))