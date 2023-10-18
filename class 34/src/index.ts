interface employees{
    salary:Number
    name:String
    age?:Number
}
interface HigherManagnment extends employees {
    Leader:Boolean
}
const CEO={
    orgnizationLeader:true,
    salary:"3000,000",
    name:"Random Name",
    age:50
}
const Manager={
    isManagingTeam:true,
    salary:80000,
    name:"Random Name",
    age:25
}
const simpleWorker:employees={
    salary:30000,
    name:"Random Name",
    age:25
}

const HR:HigherManagnment={
    salary:80000,
    name:"Random Name",
    Leader:false,
}
console.log("HR",HR);
console.log(Object.keys(HR));
console.log(Object.values(HR));
console.log(Object.entries(HR));
HR["name"]
HR.name
for(let i=0;i<Object.keys(HR).length;i++){
    console.log(HR[Object.keys(HR)[i] as keyof typeof HR]); 
}
const newMap=Object.keys(HR).map((obj,index)=>{
    // console.log(obj,index);
    console.log(`value of ${obj}`,HR[obj as keyof typeof HR]);
    
    // return "New"
})
console.log('newMap',newMap);
[1,2,3].map(obj=>{
    console.log("obj",obj);
})