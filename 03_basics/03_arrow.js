const user = {
    username :"Nouman",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Haider"
//user.welcomeMessage()
//console.log(this)

// function chai (){
//     let username = "Nouman Haider"
//     console.log(this)
//     console.log(this.username);
    
// }
//  chai()



// const chai = function(){
//     let username = "Nouman"
//     console.log(this.username)
// }
// chai()


const chai = ()=>{
    let username = "Nouman"
    console.log(this)
}
// chai()

// const addTwonumbers = (num1, num2)=>{
// return num1+num2
// }
// console.log(addTwonumbers(3,4));

// const addTwonumbers = (num1, num2)=> num1+num2
//const addTwonumbers = (num1, num2)=> (num1+num2)
const addTwonumbers = (num1, num2)=> ({username:"Nouman"})
console.log(addTwonumbers(3,4));


// IIFE Imidiately Invoked Function Expression

(function chai(){
    console.log("Database Connected")
})();
((name)=>{
    console.log(`Database connected , ${name}`)
})("Numan")