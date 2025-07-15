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