const file = require("node:fs/promises");

//ASYNC AWAIT doesnt work with CommonJS but with ES6 modules works
//IIFE (Immediately Invoked Function Expression)
(
    async () => {

        console.log("Reading the first file.....");
        const text = await file.readFile("./archivo.txt", "utf-8");
        console.log("Finishing the first file.....");
        console.log(text);

        console.log("Reading the second file......");
        const text2 = await file.readFile("./archivo2.txt", "utf-8");
        console.log("Finishing the second file......");
        console.log(text2);
    }
)()
