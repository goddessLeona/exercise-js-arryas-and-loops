const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names[3])
console.log(names)

const addname = names.push("Drogba")
console.log(addname)
console.log(names)

const addname2 = names.unshift("Figo")
console.log(addname2)
console.log(names)

//upgift 6

const removename = names.pop()
console.log(names)
console.log(removename)

// upgift 7

const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
console.log(players)

const messi = (players.includes("Messi"))
console.log(messi)


// upgift 8

console.log(players)

if (players.includes("Zlatan")){
    console.log("the array does include Zlatan")
}else{
    console.log("Zlatan do no not excist in the array")
}

// Uppgift 9 + 10

console.log(players)
const marado = players.indexOf("Maradona")
console.log(marado)
console.log(players)

// uppgift 11

const stringplayers = players.join(" ")
console.log(stringplayers)

// uppgift 12

const stringplayers2 = players.join("-")
console.log(stringplayers2)

// upgift 13
console.log(players)
const spliceplayers2 = players.splice(1,2)
console.log(spliceplayers2)
console.log(players)

// uppgift 14

const sliceplayers = players.splice(2,0,"Ronaldinho")
console.log(players)

//upgift 15

const check = players.indexOf("Ronaldo")
console.log(check)
const splicenew = players.splice(1,check,)
console.log(players)

const andnames = players.splice(1,0,"Tor", "Emil", "jens")
console.log("new array with 3 more names " + players)
// uppgift 16

const splicenew2 = players.splice(0,3)
console.log(splicenew2)
console.log(players)

//uppgift 17
console.log(players.splice(3,0,"beer", "sucker", "soov", "vers"))
console.log("list before remove of players " + players)
const spliceremove = players.splice(2)
console.log(spliceremove)
console.log("what is left in list "+ players)
console.log(players.splice(1,0,"bengt","per","fred","oskar"))
console.log("way? " + players)
console.log(players)

// uppgift 18
console.log(players.with(1,"Mbappé"))
console.log(players)

// Upgifter Loopar

// Uppgift 19

const numbers2 = [5, 8, 12, 20, 5];
console.log(numbers2)

for(let i = 0; i < numbers2.length; i++){
    console.log(numbers2[i])
}

// Uppgift 20

const numbers = [5, 8, 12, 20, 3];
console.log(numbers)
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum)
    
// Uppgift 21

const numbers3 = [5, 8, 12, 20, 3];
var max = 0;

for(let i = 0; i < numbers3.length; i++){
    if (numbers3[i] > max){
        max= numbers3[i];
    }
}
console.log(max)

// uppgift 22

const numbers4 = [5, 8, 12, 20, 3];
let doubledNumbers = []

for (let i = 0; i < numbers4.length; i++){
        doubledNumbers.push(numbers4[i]*2);
}
console.log(numbers4)
console.log(doubledNumbers)

// uppgift 23
