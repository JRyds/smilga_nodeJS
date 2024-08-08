// Modules
// CommonJs, every file is a module (by default)
// Modules - Encapsulated Code, only share minimum,

const names = require("./4-names");
const utils = require("./5-utils");

// actually when a module is required, 
// it is evaluated first so any fucntions that are called in the module will run.
require("./7-mind-grenade")



// utils.sayHi("Susan");
// utils.sayBye(names.john);
// utils.sayBye(names.peter);