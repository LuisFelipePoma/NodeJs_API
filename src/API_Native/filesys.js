const file = require("node:fs");

console.log("Stats of the file");
const stats = file.statSync("./archivo.txt",);
console.log(
    stats.isFile(), // if is file
    stats.isDirectory(), // if is directory
    stats.isSymbolicLink(), // if is symbolic link
    stats.size, // size in bytes
);
// Problems with reading files in NodeJS (Blocking)
console.log("Reading the first file.....");
const text_sync = file.readFileSync("./archivo.txt", "utf-8");
console.log("Finishing the first file.....");
console.log(text_sync);

console.log("Reading the second file......");
const text_sync2 = file.readFileSync("./archivo2.txt", "utf-8");
console.log("Finishing the second file......");
console.log(text_sync2);

// Best way to read files in NodeJS (Non-Blocking)

console.log("\n\nReading the first file.....");
file.readFile("./archivo.txt", "utf-8", (err, text) => { // Execute the callback when the file is read
    if (err) {
        console.log(err);
    } else {
        console.log(text);
        console.log("Finishing the first file.....");
    }
});

console.log("Reading the second file......");
file.readFile("./archivo2.txt", "utf-8", (err, text) => { // Execute the callback when the file is read
    if (err) {
        console.log(err);
    } else {
        console.log(text);
        console.log("Finishing the second file......");
    }
});