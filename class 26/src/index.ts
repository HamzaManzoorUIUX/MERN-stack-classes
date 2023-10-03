let a = 10
let b = 56
console.log('a=', a, " b=", b);
//swaip values
a = a + b //a=66
b = a - b //b=66-56=10
a = a - b //a=66-10=56
console.log('a=', a, " b=", b);

//do while
let x = 0
do {
    console.log('Hamza manzoor');
    x = x + 0.1
} while (x < 1)
//print 1/2, 3/4, 5/6 .....

let i = 1
do {
    if (i % 2 !== 0)
        console.log(`${i}/${i + 1}`);
    i = i + 1
} while (i <= 100)

let ab=100
while (ab>=1) {
    if (ab % 2 !== 0)
        console.log(`${ab}/${ab + 1}`);
    ab=ab-1
}