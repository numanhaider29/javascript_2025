// let score = undefined;
// console.log(typeof score);
// console.log(typeof (score));
// let valueInNumber= Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// let number = 1258
// stringy = String(number);
// console.log(stringy);
// console.log(typeof stringy);
/*
Interview tricky questions
null when converted to number will return 0
when we use typeOF(null)  we will get {} an empty object

let score = "32as"
when we use Number(score) on score variable it will be converted into number but "32as" is not a number
upon checking the value of score we will get Nan 

if we have udefined and we check it's type we will git Nan as well 

let score = true

upon checking the typeOf(score) 

we will get 1 

hint
common sense "33wqa" cannot be converted into numbers so will return NaN
and
"Nouman Haider" can not be converted into numbers and again will return NaN
however
"33264" can be converted into number


boolean language
0 	=> 	false
1	=> 	true
""	=> 	false
"value"	=> 	true

same ways we can use String method and convert a number into string
*/

// let str = "Asad"
// let str2 = " Mehmood"
// let str3 = str + str2
// console.log(str3);

// understanding the
// prefix and postfix increment values 
// let num1
let gameCounter = 100

gameCounter++;
++gameCounter;
console.log(gameCounter);
