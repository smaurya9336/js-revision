function addTwoNumbers(num1,num2) {
    let result = num1 + num2
     console.log("sarita")
    return result
   
}
const res=addTwoNumbers(5, 3)
// console.log("Result",res) 


function loginUser(username="sarita"){
    if(!username){
        return "Please provide a username"
        return

    }
    return `${username} just logged in`
}
// console.log(loginUser("Sarita"))
// console.log(loginUser(""))


// function calculateCartPrice(...num1){//rest parameter
    
//     return num1
// }

// function calculateCartPrice(var1,var2,  ...num1){//gererate last two value
    
//     return num1
// }
// function calculateCartPrice(...num1, var1, var2){//generate syntax error because rest parameter should be at the end
    
    // return num1
// }
// console.log(calculateCartPrice(2,200,400,500))


const user={
    username:"Sarita",
    price: 2000
}
function handleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`)
}
// handleObject(user)

handleObject({
    username:"Anjali",
    price: 200
})

const myNewArray=[200,300,400,500]

function returnArray(getArr){
    return getArr[2]
}
// console.log(returnArray(myNewArray))

console.log(returnArray([100,200,300,400,500]))
