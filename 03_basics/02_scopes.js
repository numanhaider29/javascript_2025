//var c = 300
let a = 300

if (true) {
    let     a = 10;
    const   b = 20;
    var     c = 30
}


// console.log(a);
// console.log(c);
// console.log(c);

function one (){
    const username = "Nouman"
    function two() {
        const website = "Youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
one()

if (true) {
    const username = "Qazi Nouman Haider"
    if (username === "Qazi Nouman Haider") {
        const website = "javascript"
        //console.log(username + website);
    }
    //console.log(website); 
}
//console.log(username);

// +++++++++++++++++ interesting ++++++++++++++++
addone(5)
function addone(num) {
    return num +1
}

addTwo(5)
const addTwo = function (num) {
    return num + 2
}