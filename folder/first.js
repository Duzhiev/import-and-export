function sum (a, b) {
    let newSum = 0;
    newSum = a + b;
    return newSum
}
console.log(sum(10, 20))
let firstLet = 10;
let secondLet = 20;

module.exports = {sum: sum, firstLet: firstLet, secondLet: secondLet}