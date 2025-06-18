const tinderUser= new Object()
tinderUser.id = "abc123"
tinderUser.name = "Samy Zain"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email :"some@gmail.com",
    fullname :{
        userfullname:{
        firstname:"Nouman",
        lastname:"Haider" 
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

// merging of two objects togather 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}

const obj3= Object.assign({},obj1,obj2,obj4)
const obj5 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);
//console.log(obj5);

const users = [
    {
        id : 1,
        email: "numan@test.com"
    },
    {
        id : 2,
        email: "asad@test.com"
    },
    {
        id : 3,
        email: "fahad@test.com"
    },
    {
        id : 4,
        email: "abdullah@test.com"
    }

]

// console.log(users[1].email);
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "Js in Urdu",
    price : "999",
    courseInstructor: "Hitesh Chaudhary"
}

const {courseInstructor:CI} = course

//console.log(courseInstructor);
console.log(CI);



//  json format
// {
//     name: "Nouman",
//     email : "numan@test.com"
// }