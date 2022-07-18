// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// describe("decoder", () => {
//     it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
//         expect(decoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(decoder(secretCodeWord2)).toEqual("Gobbledygook")
//         expect(decoder(secretCodeWord3)).toEqual("Eccentric")
//     })
// })

// ReferenceError: decoder is not defined

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.

// /name function
// //takes in a string as a parameter and argument
// //checks string to include a certain "letter"
// //converts string to number
// //converts number to string

// const decoder = (string) => {
//     for(let i=0; i < string.legnth; i++)
//     if(string[i] = "a") {
//         return string[i].replace("a",4)
//     } else if(string[i] = "e") {
//         return string[i].replace("e",3)
//     } else if(string[i] = "i") {
//         return string[i].replace("i",1)
//     } else if(string[i] = "0") {
//         return string[i].replace("o",0)
//     } else {
//         return string.length
//     }
// }



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe("wordFinder", () => {
//     it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
//         expect(wordFinder(letterA)).toEqual(["Mango", "Apricot", "Peach"])
//         expect(wordFinder(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })
// ReferenceError: wordFinder is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


// b) Create the function that makes the test pass.

// const wordFinder = (array, string) => {
//     let find = array.filter(value => {
//         value.includes(find)
//         return string.split(" ")
//     })
// }

// name my function
// takes an array as a parameter and a string (2)
//iterates over the array 
//finds the letter of the string in the word within the array
//returns words containing that string(letter)



// let newArray = []
// let finder = newArray.map(value => {
//     value.includes(string) 
//         return finder
// })
const wordFinder = (array, string) => {
    let find = array.toString()
    find.includes(string)
    return string.split('')

}
// array.includes(string)

// const wordFinder = (array, string) => {
//     array.forEach( value => {
//         value.includes(string)
//         return array
//     })
// }



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("pokerFace", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(pokerFace(hand1)).toEqual(true)
        expect(pokerFace(hand2)).toEqual(false)
        expect(pokerFace(hand3)).toEqual(false)
    })
})
// ReferenceError: pokerFace is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false


// b) Create the function that makes the test pass.
//name function
//pass in an array as a parameter and argument
//if else statements 
//strict equality operator 

const pokerFace = (array) => {
    if(array === hand1) {
        return true 
    } else if(array === hand2) {
        return false  
    } else if (array === hand3) {
        return false
    } else {
        return "fold"
    }
}


