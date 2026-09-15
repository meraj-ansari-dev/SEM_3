const fs = require("fs").promises;

async function writeFile(){
    try{
        await fs.writeFile("promise.txt","Hello students !");
        console.log("file created and data written successfully. ");
    } catch(error){
        console.log("error: ",error);
    }
}
writeFile();

async function readFile(){
    try{
        const data = await fs.readFile("promise.txt","utf-8");
        console.log("file content: ");
        console.log(data);
    }catch(error){
        console.error("error: ",error);
    }
}
readFile();

async function renameFile() {
    try{
        await fs.rename("promise.txt","promise_new.txt");
        console.log("file renamed successfully.");
    }catch(error){
        console.log("error: ",error);
    }
}
renameFile();

async function appendFile() {
    try{
        await fs.appendFile("promise_new.txt","\n Welcome to FSD Training.")
        console.log("data appended successfully. ");
    }catch(error){
        console.log("error: ",error);
    }
}
appendFile();