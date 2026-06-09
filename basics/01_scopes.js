let a=10
const b=20
// var c=30
// console.log(a)
// console.log(b)
// console.log(c)  

if(true){
    let a=100
    const b=200
    var c=300
    
}
// console.log(a)
//     console.log(b)
//     console.log(c)

function one(){
    const username="sarita"

    function two(){
        const website="google"
        console.log(username)
        
    }
    // console.log(website)
    // two()
}
// one()


if(true){
    const username="sarita"
    if(username=="sarita"){
        const website=" youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)   

console.log(addOne(5))
function addOne(num){
    return num+1

}

console.log(addTwo(5)) //rror  hoisting only works for function declaration and var variable but not for let and const variable and function expression
const addTwo =function(num){
     return num+2
}
