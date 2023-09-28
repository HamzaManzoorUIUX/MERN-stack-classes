const a=12
function checkType(abc:number) {
    if(typeof a==="string"){
        console.log('a is a string',a);
    }
    else if(typeof a==='number'){
        console.log('a is a number',a);
    }
}
checkType(a)
checkType(98)
console.log('End');
function FindGrade(num:number) {
    if(num>=85){
        console.log('A+ Grade '+num+" amazing "+num+" Hamza");
        
    }
    else if(num>=75){
        console.log(`A Grade ${num} amazing ${num} Hamza`);
        
    }
}
FindGrade(75)