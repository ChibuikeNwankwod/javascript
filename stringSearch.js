let str = "Hello my friend how do you do"

let firstOcc = str.indexOf("do", 23)
let lastIndexOf = str.lastIndexOf("do", 30)
let seach = str.search(/Friend/gi)

let match = str.matchAll("do")

let includes = str.includes("the")

let startWith = str.startsWith("Hello")
let endWith = str.endsWith("o")


console.log(firstOcc)
console.log(endWith)