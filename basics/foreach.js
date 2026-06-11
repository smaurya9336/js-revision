const coding=["JavaScript", "Python", "Java", "C++"];
coding.forEach((prog,index,arr)=>{
    // console.log(prog,index,arr)
})
// coding.forEach(function (item){
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)


const myCoding=[{
    languageName:"JavaScript",
    extension:".js"
},
{
    languageName:"Python",
    extension:".py"
},
{
    languageName:"Java",
    extension:".java"
},
{
    languageName:"C++",
    extension:".cpp"
}
]

myCoding.forEach((item)=>{
    console.log(`${item.languageName} : ${item.extension}`)
}
)