// singlton

// Object literals 

const mySymb = Symbol("key1")
const JsUser = {
name: "Nouman",
"full name":"Qazi Nouman Haider",
[mySymb]: "myKey1",
age: 32,
location: "Daska",
email: "numanhaider29@gmail.com",
isLoggedIn: true,
lastLoginDays: ["Monday","Saturday"]

}
// ways to access the value in an object
//console.log(JsUser.email);
//console.log(JsUser."full name");
//console.log(JsUser["full name"]);
//console.log(typeof JsUser[mySymb]);
//console.log(typeof mySymb)
JsUser.email = "numanhaider@TextDecoderStream.com"


JsUser.greeting = function  (){
    console.log("Welcome to Javascript revision");    
}

JsUser.greetingtwo = function  (){
    console.log(`${this["full name"]} Welcome to Javascript`);    
}

//Object.freeze(JsUser)
JsUser.email= "numanhaider29@yahoo.com"
console.log(JsUser.greetingtwo());

