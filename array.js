
"function(sentence, word) => 5"
let student = ["Daniel", "Peter","Michael"]
let student1 = ["Daniel", "Mildred","Xandy"]

let numArr = [10, 15, 60, 30, 15, 12, 80]

// student[0] = "JAMES"

// student.push("Daniel")

// let removed = student.pop()

// student.shift()

// student.unshift("Treasure")


const stude = {
    name:"Daniel"
}

let newArr = student.concat(student1 )

student.splice(1,1, "John", "Emelda")

// console.log(student)


let sort = student.sort()
// console.log(student)

function sort1(a, b){
    return a - b
}

let sortedArr = numArr.sort(sort1)

// console.log(sortedArr)

const reverArr = numArr.reverse()

console.log(reverArr)

const check = student.includes('simi')

console.log(check)

// console.log(removed)