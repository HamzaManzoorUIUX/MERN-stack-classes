const arr=[12,95]
console.log('arr',arr);
console.log('push',arr.push(123));
console.log('arr after push',arr);
// console.log('pop',arr.pop());
console.log('arr after pop',arr);
console.log("=================");
console.log("=================");
// console.log('shift',arr.shift());
console.log('arr after shift',arr);
console.log('unshift',arr.unshift(9865));
console.log('unshift',arr.unshift(98));
console.log('arr after unshift',arr);
console.log('length',arr.length);
console.log("=================");
console.log("=================");
console.log("slice",arr.slice(1,2));
console.log('arr',arr);
console.log("splice",arr.splice(1,1,56,98));
console.log('arr',arr);
console.log("find",arr.find(x=>x>=60));
console.log("filter",arr.filter(x=>x>=60));
function namePrint(){
    console.log('Hamza Manzoor');    
}
namePrint()
function sum(val1:number,val2:number) {
    return val1+val2
}
function cirfanc(diameter:number){
    return 22/7*diameter
}
console.log("sum",sum(12,98));
console.log("sum",sum(98,156));
console.log("sum",sum(85,9876));

console.log('circumfance',cirfanc(65).toFixed(2));
console.log('circumfance',typeof cirfanc(65).toFixed(2));

console.log('arr',arr);
