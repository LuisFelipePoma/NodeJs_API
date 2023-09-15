const path = require('path');

// Bars separator in  different OS
// unix -> /
// windows -> \ 
console.log(path.sep);

// Joins routes with path.join
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// Get the last part of the path
const base = path.basename(filePath);
console.log(base);