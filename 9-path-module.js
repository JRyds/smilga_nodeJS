const path = require("path")


console.log(path.sep); //shows the seperator "/" for the OS

const filePath = path.join("/content/", "subfolder", "test.txt") //joins params
//into a filepath
console.log(`this is the filepath ${filePath}`);


const base = path.basename(filePath) //extracts the name of the last diretory entry
console.log(`this is the base: ${base}`);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.text") //gives absolute path
console.log(absolute);





