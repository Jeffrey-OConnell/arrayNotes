let myPokemon = ["Gengar", "Pikachu", "Eevee", "Dragonite", "Charizard"]
console.log(myPokemon[3])

// Add to end of array
myPokemon.push("Milotic")
myPokemon[6] = "Turtwig"
console.log(myPokemon)

// Removes last element of array
myPokemon.pop();
console.log(myPokemon)

// Add to front of array
myPokemon.unshift("Turtwig")
console.log(myPokemon)

// Remove from front of array
myPokemon.shift()
console.log(myPokemon)

// Replace
myPokemon[0] = "Turtwig"
console.log(myPokemon)

myPokemon[0 + 3] = "Starraptor"
console.log(myPokemon)

// Return portion of array
let eevee = myPokemon.slice(2, 3)
console.log(eevee)
console.log("----")

// Remove portion of array
myPokemon.splice(3, 2)

//Insert into array
console.log("###")
console.log(myPokemon)
myPokemon.splice(0,0,"Bob")
console.log(myPokemon)

myPokemon.splice()