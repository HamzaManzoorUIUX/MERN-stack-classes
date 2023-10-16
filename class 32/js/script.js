function getAlert(){
    const a = +prompt("Enter a user age for print")
    switch (a) {
        case 20:
            alert("wellcome");
            break
        case 19:
            alert("you are not wellcome");
            break
    
        default:
            alert("please enter 20 or 19");
            break;
    }
}
const a=()=>{

}
console.log(typeof a());