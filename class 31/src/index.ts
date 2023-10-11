// number functions
const a=15
const b='20'
const c=65
console.log(Number.isFinite(a/0));
console.log(Number.isNaN(NaN));
console.log(typeof(a+c+Number(b)));
console.log(Number(b)); // type casting
console.log(Number.parseInt(b));
console.log(Number.parseFloat(b));
console.log(Number.isNaN(c));
const random=Math.random()*10
console.log(random);
console.log(Math.ceil(random));
console.log(Math.floor(random));
console.log(Math.round(random));
console.log(Math.pow(2,20));
console.log(Number(Math.PI.toFixed(2)));
console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));
console.log(Math.abs(-265));

console.log(Number.parseInt('123abc546'.replace('abc',"")));
console.log(Number.parseInt('abc123'));

console.log((123456).toString());
console.log(!!123456);
console.log(!!0);
console.log(!!"hamza");
console.log(!!"");
console.log(!!undefined);
console.log(!!NaN);
console.log(!!null);
console.log(!![]);
console.log(!!{});




