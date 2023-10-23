// const a=[11,1,2,3,1,2,5,9,5,6]
// // console.log([...new Set(a)]);
// const uniqe=new Set(a)
// console.log('uniqe',[...uniqe]);


// console.log({name:"hamza manzoor"});
// console.log({...{name:"hamza manzoor"}});
// console.log([1,2,3,5,6,8,9]);
// console.log([...[1,2,3,5,6,8,9]]);

// const b=[...a]

const catsName: String[] = ["simba", "mufasa"]

type userType = {
    name: String,
    RollNumber: Number,
}
type userswithMarks = {
    Marks: any
}
const newUser: userType & userswithMarks = {
    name: 'Hamza Manzoor',
    RollNumber: 123,
    Marks: {}
}
const user: userType[] = [
    {
        name: 'Hamza Manzoor',
        RollNumber: 123,
    },
    {
        name: 'Hamza Manzoor',
        RollNumber: 123
    }
]

console.log("user", user);
user.map(obj => {
    if (obj.RollNumber) {
        console.log('obj', obj);

    }
})

const totalMarks: Number | undefined | String = "Hamza"
// const totalMarks2: Number & undefined = "Hamza"


const findTypeResult = (val: Number | String) => {
    if (typeof (val) === "string") {
        console.log("Hello Hamza Its a string");
    }
    if (typeof (val) === "number") {
        console.log("Hello Hamza Its a Number");
    }

}
findTypeResult("123")
console.log(!!"123");
console.log(!!"123");
const inputVal="Hamza" 
const inputVal2="manzoor"
enum statusName {"Hamza","Ali","Raza","manzoor"}
console.log("statusName",statusName);
console.log("statusName[3]",statusName[3]);
console.log(statusName[inputVal]);
console.log("statusName[inputVal2]",statusName[inputVal2]);
console.log(statusName[0]);
console.log(statusName[statusName[inputVal2]]);
console.log(["Hamza","Ali","Raza","manzoor"].includes("manzoor"));
console.log(["Hamza","Ali","Raza","manzoor"].indexOf("manzoor"));
