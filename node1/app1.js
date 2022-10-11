
const fs = require('fs');
const yargs = require('yargs');
const val = require('validator');
const data2 = require('./notes');
fs.writeFileSync('notes.txt','This is created by Node.js',(err,data)=>{
  if (err){
    console.log("Error detected");
  }else{
    console.log('Succesfull creaetd.');
  }
});
//appending data to exisisting file
const  data1 = 'trying tolearn node.js';
fs.appendFileSync('./notes.txt',data1);
const data5 =data2();
console.log(data5);

fs.appendFileSync('./notes.txt',data5);
console.log(val.isEmail('agharami@gmail.com'));

console.log(process.argv);

const command = process.argv[2];
if(command==='add'){
    console.log('Addingnotes');
}
else if(command === 'remove'){
    console.log('removing Notes.');
}else{
    console.log('Not Adding...');
}
