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

// uppgift 16