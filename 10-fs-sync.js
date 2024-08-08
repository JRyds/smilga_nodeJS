const { readFileSync, writeFileSync } = require("fs");
console.log("start");


const first = readFileSync("./content/first.txt", "utf8") // reads contents of the file called first.txt into the variable
const second = readFileSync("./content/second.txt", "utf8") // reads contents of the file called second.txt into the variable

console.log(first, second);


writeFileSync( //creates a new file called result-synch.txt and passess first and second values in.
    "./content/result-sync.txt", `First file data: "${first}". 
    \nSecond file data "${second}"`,
    { flag: "a" } //this flag appends to an already existing file.
)

console.log("done with task");
console.log("starting next task");
