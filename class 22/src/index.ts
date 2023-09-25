const strr:string="my name is Hamza Manzoor. hamza"
const num=123
console.log("replace",strr.replace(/hamza/ig,"Ali"));
console.log("search index",strr.search('hamza'));
console.log("convert to string",typeof num.toString());
console.log("Slice from 11 to 16",strr.slice(strr.search('Hamza'),13));
console.log("find length of array",strr.length);
console.log("find length of array",strr.substring(11,13));
console.log("to lower case",strr.toLowerCase());
console.log("to uppder case",strr.toUpperCase());
const newStrr=new String("my name is Hamza Manzoor. hamza")
const new_concat_string=strr.concat(" is a teacher of MERN stack",".")
console.log("concat",new_concat_string);
console.log('trim',"      Hamza Manzoor ".trim());
console.log('trim',"      Hamza Manzoor ".trim());
console.log('padding start',"123".padStart(5,"0"));
console.log('padding end',"123".padEnd(5,"0"));
console.log('Char at',strr.charAt(11));
console.log('Char at',strr.charCodeAt(11));
const a="a/b/c/d/e/f/g/h/i"
console.log(a.split('/'));

console.log(strr);
console.log(newStrr);

