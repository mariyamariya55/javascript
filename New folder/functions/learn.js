// console.log(Math.round(3,5))
let n=-645

function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

console.log(reverseInt(-546));