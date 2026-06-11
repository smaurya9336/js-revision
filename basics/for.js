const arr=[1,2,3,4,5];
for(const num of arr){
    // console.log(num);
}

const greetings="Hello World";
for(const greet of greetings){
    // console.log(greet)
}

//maps

const map=new Map()
map.set("IN","India")
map.set("US","United States")
map.set("UK","United Kingdom")

// console.log(map);
for(const [key,value] of map){
    console.log(`${key} : ${value}`);
}


const stu={
    name: "John",
    age: 20,
    city: "New York"    
}

// for(const [key,value] of stu){//generates error because stu is not iterable
//     console.log(`${key} : ${value}`);
// }

for(const key in stu){
    console.log(`${key} : ${stu[key]}`);
}