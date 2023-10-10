//     *
//    ***
//   *****
//  *******
//   *****
//    ***
//     *

for (let i = 0; i < 4; i++) {
    let star = ""
    for (let x = 0; x < (6/2-i); x++) {
        star+=" "        
    }
    for (let j = 0; j < (7-(6-i*2)); j ++) { // i===0 => 0, i===3 => 6
        star += "*"
    }
    console.log(star);
}
for (let i = 0; i < 3; i++) {
    let star = ""
    for (let x = 0; x < i+1; x++) {
        star+=" "        
    }
    for (let j = 0; j < (5-i*2); j++) { // i===0 =>5, i===2=> 1
        star+="*"
    }
    console.log(star);
    
}

function diamondGen(diamond:number) {
    for (let i = 0; i < Math.ceil(diamond / 2); i++) {
        let star = ""
        for (let x = 0; x < (Math.floor(diamond / 2) - i); x++) {
            star += " "
        }
        for (let j = 0; j < (diamond - ((diamond - 1) - i * 2)); j++) { // i===0 => 0, i===3 => 6
            star += "*"
        }
        console.log(star);
    }
    for (let i = 0; i < Math.floor(diamond / 2); i++) {
        let star = ""
        for (let x = 0; x < i + 1; x++) {
            star += " "
        }
        for (let j = 0; j < ((diamond - 2) - i * 2); j++) { // i===0 =>5, i===2=> 1
            star += "*"
        }
        console.log(star);
    
    }
}
diamondGen(11)
diamondGen(21)
let i=95
console.log('i',i);
console.log('i++',i--); //i=i+1
console.log('++i',++i); //i=i+1

let a=--i
let b=i++
console.log('b',b);
console.log('a',a);
