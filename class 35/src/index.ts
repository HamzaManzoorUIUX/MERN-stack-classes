
const users:any=[
    {
        id:1,
        name:"Hamza",
        age:25
    },
    {
        id:2,
        name:"ali",
        age:31
    },
    {
        id:3,
        name:"Wasi",
        age:16
    },
    {
        id:4,
        name:"Raza",
        age:56
    },
    {
        id:5,
        name:"Haider",
        age:43
    },
]
console.log('users',users);
console.log('users.find',users.find((x:any)=>{
    if(x.name.toLowerCase().includes('hamza')){
        return x
    }
    return null
}));
console.log('users.filter',users.filter((x:any)=>{
    if(x.name.toLowerCase().includes('ha')){
        return x
    }
    return null
}));
const a=["hamza","ali","haider"]
console.log('a.find',a.find(x=>{
    if(x.includes('ha')){
        return x
    }
    return null
}));
console.log('a.filter',a.filter(x=>{
    if(x.includes('ha')){
        return x
    }
    return null
}));
// this is little complex
console.log("user.reduce",users.reduce((prev:any,currentVal:any)=>{
    return prev+currentVal.age
},0));
console.log('new Array',Object.keys([...new Array(50)]));
