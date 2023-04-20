const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

const encrypt = (string) => {
    // turn string into an array with each letter being indexed
    let working_array = string.split('')
    // need to save the .map into a new array or set the current variable to the mapped values since map isn't a mutator method
    working_array = working_array.map ((value) => {
        if (value.toLowerCase() === 'a') {
            return value = '4'
        }
        if (value.toLowerCase() === 'e') {
            return value = '3'
        }
        if (value.toLowerCase() === 'i') {
            return value = '1'
        }
        if (value.toLowerCase() === 'o') {
            return value = '0'
        }
        return value
    })
    // convert the array back into a string and return it
    return working_array.join('')
}

console.log(encrypt(secretCodeWord1))
console.log(encrypt(secretCodeWord2))
console.log(encrypt(secretCodeWord3))



const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

const wordSearch = (array, string) => {
    let filteredArray = array.filter(value => value.toLowerCase().includes(string))
    return filteredArray
}

console.log(wordSearch(fruitArray, letterA))
console.log(wordSearch(fruitArray, letterE))

// --------------------3)

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true



const fullestHouse = (array) => {
    const count = {}
    for (const element of array) {
        if (count[element]) {  // here I am checking if the element has already been added to the count array
            count[element] += 1  // if it is then I add +1 to the count
        } else {
            count[element] = 1  // if the element isn't already there then I add it and give it a 1 as a value
        } 
    }
    if (Object.values(count).includes(3) && Object.values(count).includes(2)){
        return true
    } else {
        return false
    }
}

console.log(fullestHouse(hand1))
console.log(fullestHouse(hand2))
console.log(fullestHouse(hand3))
console.log(fullestHouse(hand4))