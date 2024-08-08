const { readFile, writeFile } = require("fs");

console.log("start");


readFile("./content/first.txt", "utf8", (err, first) => { // Read the first file
    if (err) { // Handle error
        console.log(err);
        return;
    }

    // Nested callback for reading the second file
    readFile("./content/second.txt", "utf8", (err, second) => { // Read the second file
        if (err) { // Handle error
            console.log(err);
            return;
        }

        // Callback for writing the result file
        writeFile("./content/result-async.txt", `First async file data: "${first}". \nSecond async file data: "${second}"`, (err) => { // Write to the result file
            if (err) { // Handle error
                console.log(err);
                return;
            }
            console.log("done with task");
        });
    });
});

console.log("starting next task");

