let myPokemon = ["Gengar", "Pikachu", "Eevee", "Dragonite", "Charizard"]

console.log(myPokemon.length)
console.log("--------------------")


for(let i = 0; i < myPokemon.length; i++){
    if(i % 2 === 0){
        console.log(myPokemon[i])
    } else { 
        myPokemon.splice(i, 1,"Bulbasaur")
    }
}
console.log(myPokemon)

console.log("--------------------")

for (let i = 0; i < myPokemon.length; i++){
    if(myPokemon[i] === "Bulbasaur"){
        console.log(myPokemon[i])
    }
}

console.log("--------------------")

for (let i = 0; i < myPokemon.length; i++){
    if(myPokemon[i] !== "Bulbasaur"){
        console.log(myPokemon[i])
    }
}