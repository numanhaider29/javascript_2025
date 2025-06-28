const userLoggedIn = true
if (userLoggedIn) {
    // execute some code

}

const balance = 1000

if (balance>500) {
    console.log("test");
    
}

// if (balance>500) console.log("test2"); this one is a bad practice

// nesting

if (balance < 500) {
    console.log("less than");

}else if (balance<750) {
    console.log("less than 750");
    
}else if (balance < 900) {
    console.log("less than 900");
    
}else{
    console.log("less than 1200");
    
}

const loggedin = true
const hasdebitcard = true
const isauthorized = true
const amember = true
const aguestuser = false

if (loggedin && hasdebitcard) {
    console.log("the user is logged in and has debit card");
}
if (amember || aguestuser) {
    console.log("a member or a guest user is here");
    
}