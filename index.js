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
let max = 0;

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

const numbers6 = [5, 8, 12, 20, 3];
let sum2 = 0;

for(let i = 0; i < numbers6.length; i++){
    sum2 += (numbers6[i]/numbers6.length);
}
console.log(sum2)

//Uppgift 24

const numbers7 = [5, 8, 12, 20, 3];
let min = numbers7[0]

for(let i = 1; i < numbers7.length; i++){
        if (numbers7[i]< min){
            min = numbers7[i];
        }
}
console.log(min)

// Uppgift 25

const numbers8 = [5, 8, 12, 20, 3];
let positiveNumbers =[];

for (let i = 0; i < numbers8.length; i++){
    const num = numbers8[i];
    if (num % 2 === 0){
        positiveNumbers.push(num);
    }
}
console.log(positiveNumbers)

// Uppgift 26

const mixedNumbers = [3, -5, 12, -1, 8, -6];
let positive = [];

for(let i = 0; i < mixedNumbers.length; i++){
    const numm = mixedNumbers[i];
    if (numm % 2 === 0){
        positive.push(numm);
    }
}

console.log(positive)

// Uppgift 27

const numbers9 = [5, 8, 12, 20, 3];
let i = 0;

while (i < numbers9.length){
   console.log(numbers9[i])
    i++;

    if (numbers9[i] > 10 ){
    break;
    }
}

// Uppgift 28

// uppgift 29

const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
console.log(words)
let newword = [];
const counting = {};

for(let i = 0; i < words.length; i++ ){
    let newword2 = words[i];
    counting [newword2]= (counting[newword2] || 0) || +1;
}

console.log(counting)