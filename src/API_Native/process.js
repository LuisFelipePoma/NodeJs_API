const process = require('node:process');
//entry args: 0: node, 1: process.js, 2: 1, 3: 2, 4: 3

console.log(process.argv);

//Control events of the process
process.on('exit', () => {
    console.log('The process is going to finish');
});


// Current working directory
console.log(process.cwd());

// Plataform

console.log(process.platform);

//Control the process and the output
process.exit(1)  