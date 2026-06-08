const marvel_heros=["Ironman","Thor","Hulk","Captain America"]
const dc_heros=["Superman","Batman","Wonder"]

const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros)  
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_heros)

console.log(Array.isArray("Sarita"))
console.log(Array.from("Sarita"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))