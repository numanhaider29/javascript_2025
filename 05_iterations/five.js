//  Using the arrow function syntax
const codding = ["js","rb","py","java","cpp"]
codding.forEach((item)=>{
   // console.log(item);
    
})

// using the conventional function syntax
codding.forEach(function(val){
    //console.log(val);
    
})


// function printme (item){
//     console.log(item); 
// }
// codding.forEach(printme)



// codding.forEach((item, index, arr)=>{
// console.log(item,index,arr);

// })

const mycodding = [
    {
        languagename : "cpp",
        languagefilename: "cp"
    },
    {
        languagename : "Java Script",
        languagefilename: "js"
    },
    {
        languagename : "Java",
        languagefilename: "java"
    }
]
mycodding.forEach((item)=>{console.log(item.languagename)})
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = myNums.filter((num)=>{
//  return   num>4
// })
const newnums = []

myNums.forEach((num)=>{
    if (num > 4) {
        newnums.push(num)
    }
})
console.log(newnums);

