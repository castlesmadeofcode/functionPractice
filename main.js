// console.log("testing")

// let dogName = "Ada Grace"
// let ownerName = "Kristen"

// console.log(`${dogName} is owned by ${ownerName}`)

// dogName = "Raleigh"
// ownerName = "Margaret"

// console.log(`${dogName} is owned by ${ownerName}`)

// dogName = "Francis"
// ownerName = "Jane"

// console.log(`${dogName} is owned by ${ownerName}`)


function dogOwners (dogName, ownerName) {
console.log(`${dogName} is owned by ${ownerName}`) 
}


dogOwners("Ada Grace", "Kristen");
dogOwners("Raleigh", "Margaret");
dogOwners("Francis", "Jane");

//multiples the number being passed into the function by a random number than rounds down
//to closest whole number

function randomNumbers(num) {
    const newNumber = Math.floor(Math.random() * num)
    console.log(newNumber);
}

randomNumbers(11);


const addGreen = function(domElement) {
    const element = document.querySelector(domElement)
    element.classList.add("green")
}

addGreen("#impure")
