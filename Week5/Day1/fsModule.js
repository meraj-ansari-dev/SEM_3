const fs = require('fs');
fs.writeFileSync('example.txt','this is experiment 1 in FSD workshop','utf8');
console.log('create file run sucessfully');

const data = fs.readFileSync('example.txt','utf-8');
console.log('file content is: ', data);

fs.appendFileSync('example.txt','\n this is the new line');
console.log('example file is appended');


// fs.unlinkSync('student1.txt');
// console.log('student1 file is deleted successfully');

fs.mkdirSync('samplefolder');
console.log('a new folder is created');

fs.rmdirSync('samplefolder');
console.log('new folder is deleted');
if(fs.existsSync('secastudent.txt')){
    console.log('file exist');
}else{
    console.log('file not found, need to create this file');
}