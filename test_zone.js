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
