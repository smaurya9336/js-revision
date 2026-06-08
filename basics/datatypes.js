const heros=["saktiman","naagraj","doga"]

let myObj={
    name:"Sarita",
    age:23,
    city:"Delhi"
}

const myfunction=function (){
    console.log("This is a function")
}

myfunction()

const myString="Sarita"

console.log(myString.charAt(0))
console.log(myString.length)
console.log(myString.toUpperCase())
console.log(myString.indexOf("a"))
const url="https://www.github.com/Sarita%20Maurya"
console.log(url.replace("%20","-"));
const Str="    Hello World!   "
console.log(Str)
console.log(Str.trim())

console.log(url.includes("github"))

const gameName="Sarita-Maurya"
console.log(gameName.split("-"))

const name="Sarita"
const age=23
console.log(`My name is ${name} and I am ${age} year old`)