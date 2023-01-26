let name1 = 'this is Peter Peter Peter peter'
let name2 = 'this is Daniel Daniel Daniel Daniel'
let space = 'Peter'
let length = name.length


let slice = name1.slice(-4)
let substring = name1.substring(3,7)
let substr = name1.substr(2,5)



let replace = replaceAll('Peter', 'Daniel')

let lowerCase = name1.toLowerCase()
let upperCase = name1.toUpperCase()
let join = name1.concat(name2, 'joined together')

// console.log(space.trim())
// console.log(space)

let padStart = space.padStart(13, '*')
let padEnd = space.padEnd(13, '*')

let charAt = name1.charAt('T')
let charCodeAt = name1.charCodeAt('T')
console.log(charCodeAt)


let newArr = name1.split('is ')


console.log(newArr)

// function two ('{', '>')


// function takeName (name) => 'daniel' => 'DAniel'
// function takeName (name) => 'mcdonalds' => 'MCdonalds'