// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//------------------------------------ Assessment Start ------------------------------------

// jest test template:
// describe ("nameOfFunction", () => {
//     it("explains what it takes and return expectation in plain English as this is for the programmer", () => {
//         expect(nameOfFunction()).toEqual(expected return)
//     })
// })

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// Using jest test template to test a function "encrypt" that accepts a string as an argument and returns the string as a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0
// it "takes as an argument a string, returns the string converted"
// expect(encrypt(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
// expect(encrypt(secretCodeWord2)).toEqual("G0bbl3dyg00k")
// expect(encrypt(secretCodeWord3)).toEqual("3cc3ntr1c")
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: encrypt is not defined

describe ('encrypt', () => {
    it ("takes as an argument a string, returns the string converted", () => {
        expect(encrypt(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(encrypt(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(encrypt(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// output:
// FAIL  ./code-challenges.test.js
// ReferenceError: encrypt is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// what's needed: A function 'encrypt' that accepts a string as an argument and returns the string as a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0
// since JS strings are inmutable, I need to convert it to an array using .split('') which will make each letter its own value in the array.
    // need a variable to hold the temporary array
// iterate the resulting array using .map() to change the values accordingly.
// convert the array back into a string using .join('') 
// input: a string
// output: the string modified... "a" to 4, "e" to 3, "i" to 1, and "o" to 0

const encrypt = (string) => {
    // turn string into an array with each letter being indexed
    let workingArray = string.split('')
    // need to save the .map into a new array or set the current variable to the mapped values since map isn't a mutator method
    workingArray = workingArray.map ((value) => {
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
    return workingArray.join('')
}

// output:
// PASS  ./code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// learning moment: I couldnt get .map() working by using if/else if/ else I don't fully understand why and I will have to keep researching this. I was able to finally make it work with single if statements.
// there has to be a simpler way. I will look into regular expressions as that seems promissing. 


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// Using jest test template to test a function "wordSearch" that accepts an array and a single letter string as arguments and returns an array with only values containing the string.
// it "takes as an argument an array and a string, returns an array of only values containing the given string"
// expect(wordSearch(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
// expect(wordSearch(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: wordSearch is not defined

describe ('wordSearch', () => {
    it ("takes as an argument an array and a string, returns an array of only values containing the given string", () => {
        expect(wordSearch(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(wordSearch(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// output: 
// FAIL  ./code-challenges.test.js
// ReferenceError: wordSearch is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// what's needed: function "wordSearch" that accepts an array and a single letter string as arguments and returns an array with only values containing the string
// create a working array to hold the filtered items
// iterate the array using .filter() to pick out only the values containing the argument string
    // found that I need to do value.toLowerCase().include in order to match casing or it misses values
// input: an array and a string
// output: an array containing only values that contain the string

const wordSearch = (array, string) => {
    let filteredArray = array.filter(value => value.toLowerCase().includes(string))
    return filteredArray
}

// output:
// PASS  ./code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// pseudo code:
// Using jest test template to test a function "fullestHouse" that takes in an array of 5 numbers and determines whether or not the array is a "full house"
// it "takes takes in an array of 5 numbers and determines whether or not the array is a full house"
// expect(fullestHouse(hand1)).toEqual(true)
// expect(fullestHouse(hand2)).toEqual(false)
// expect(fullestHouse(hand3)).toEqual(false)
// expect(fullestHouse(hand4)).toEqual(true)
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: fullestHouse is not defined

describe ('fullestHouse', () => {
    it ("takes takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(fullestHouse(hand1)).toEqual(true)
        expect(fullestHouse(hand2)).toEqual(false)
        expect(fullestHouse(hand3)).toEqual(false)
        expect(fullestHouse(hand4)).toEqual(true)
    })
})

// output: 
// FAIL  ./code-challenges.test.js
// ReferenceError: fullestHouse is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// what's needed: a function "fullestHouse" that takes in an array of 5 numbers and determines whether or not the array is a "full house"
// create an empty count array: const count = {}
    // I wasn't sure how to count the elements and I was considering the forEach but I wasn't getting it done. I found for...of doing research. Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// use for...of to iterate the array and count the instances of each element
// check if count includes 3 and 2 
    // couldn't remember how to access only the values of an object. Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
// input: an array of 5 numbers
// output: boolean

const fullestHouse = (array) => {
    const count = {}
    for (const element of array) {
        if (count[element]) {  // here I am checking if the element has already been added to the count array
            count[element] += 1  // if it is then I add +1 to the count
        } else {
            count[element] = 1  // if the element isn't already there then I add it and give it a 1 as a value
        } 
    } // at this point count has become a dictionary-like-object so I need to access the values and check for full house
    if (Object.values(count).includes(3) && Object.values(count).includes(2)){
        return true
    } else {
        return false
    }
}

// output: 
// PASS  ./code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total