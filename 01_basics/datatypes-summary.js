// premitive data type (7 data types) (memory based=> make changes to the copy)
// String, Number, Boolean, Null, undefined, Symbol and BigInt

// dynamically typed 
const number = 100
const isLoggedIn = false
const temp = null
let user 
const novalue = 23.12
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

const bigNumber = 3490853498034n
console.log(typeof(bigNumber));


// Non-premitive Data Types 
// Reference Based (User defined data-types) => changes may be implemnted into the original values 
// Arrays, Objects and functions
const heros = ['umer','khalid','Ali','usman']
let myobj = {
    name: "Nouman",
    age:"31",
    address: "Sialkot"
}

const myfunction = ()=>{
console.log("hello there from function");

}
const myfunction1= function(params) {
    console.log("hello there from function 1");
    
}
console.log( typeof(temp));
console.log(typeof myfunction)
// use the typof javascript function to find the data-types of both premitive and non-pemitive data-types