const user={
    username:"sarita",
    price:999,
    
    welcomeMessage:function(){
        // console.log(`${this.username} welcome to website`)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage() 
// console.log(this);


// function msg(){
//    let  username="sarita"
//     console.log(this.username);
    
// }
// msg()


// const msg=function(){
//     let username="sarita"
//     console.log(this.username); 
// }
// msg()


const msg=()=>{
    let username="sarita"
    console.log(this); 

}
// msg()

//  const addTwo = (num1,num2)=>{
//     return num1+num2

// }


// const addTwo = (num1,num2)=> num1+num2

// const addTwo = (num1,num2)=> (num1+num2)

// console.log(addTwo(3,5));


// Immediatly Invoked Function Expression (IIFE)  -- it is a function that runs as soon as it is defined. It is a design pattern which produces a lexical scope using JavaScript's function scoping. This helps to avoid polluting the global namespace and can be used to create private variables and functions.
(function msg(){
    console.log(`DB CONNECTED`);
    
})();

( (name)=>{
    console.log(`DB CONNECTED 2 ${name}`);
})("Sarita")