// for loop
let sum = 0
for (let index = 0; index <= 100; index++) {
    sum += index // sum=sum+index
}
console.log('sum', sum);

//find prime number through for loop
let a = 4
let number = 0
if (a === 1) {
    number = a
}
else {
    for (let index = 2; index <= a; index++) {
        if (a % index === 0) {
            number = index
            break
        }
    }
}
console.log(`${a} is ${a === number ? "a" : 'not a'} prime number`);
