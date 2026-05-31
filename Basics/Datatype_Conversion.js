let score = "33A"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber)
console.log(valueInNumber)
// if the thing is not convertible , it gives you output NaN

// if score = null , the number to 0 ; if undefined then the number is NaN
// if score = true , the number to 1 and false = 0 
//"Hitesh" --> NaN

let booleanNumber = -1;
let somenumber = Boolean(booleanNumber);

console.log(somenumber)