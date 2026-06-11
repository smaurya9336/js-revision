const language = {
    js: 'JavaScript',
    py: 'Python',
    java: 'Java',
    cpp: 'C++'
}
for (let key in language) {
    // console.log(key)
    // console.log(language[key])
    // console.log(`${key} : ${language[key]}`);
}

const programming=["JavaScript","Python","Java","C++"]
for(let prog in programming){
    console.log(prog) //prints index
    // console.log(programming[prog]) //prints value
    // console.log(`${prog} : ${programming[prog]}`);

}

for(let prog of programming){
    console.log(prog)
}   


const map=new Map()
map.set("IN","India")
map.set("US","United States")
map.set("UK","United Kingdom")

// for(const key in map){
//     console.log(key) 
//     console.log(map[key]) //undefined because map is not an object  
//     console.log(`${key} : ${map[key]}`); //undefined : undefined
// }