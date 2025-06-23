function sayMyName(){
    console.log("N");
    console.log("O");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");
    
}
// sayMyName()

// function addTwoNumbers(num1,num2){
//    console.log(num1+num2);
    
// }
function addTwoNumbers(num1,num2){
//    let result = num1+num2
//    return result

return num1+num2
}
const result = addTwoNumbers(2,4)
//console.log("Result :",result);

function loginUserMessage(username = "sam"){
    if (!username) 
    {
        console.log("Please enter a username");
        return
    }
return `${username} just logged in`
}
// console.log(loginUserMessage());

 function calculateCartPrice(val1,val2,...num1){

    return num1
 }
 console.log(calculateCartPrice(200,400,600,500));
 
 const user = {
    name: "Fahad",
    price: 5415646541354
 }
 function handleobject(anyobject){
    console.log(`UserName is ${anyobject.name} and price is ${anyobject.price}`); 
 }
 //handleobject(user)
 handleobject
 ({
    name: "fadi",
    price: 48435489
 })

 const myNewArray = [100,200,500,400,800]

 function returnThirdValue(getArray){
    return getArray[2]
 }
 //console.log(returnThirdValue(myNewArray));
 console.log(returnThirdValue([
    1000,2000,5456,5858
 ]));
 