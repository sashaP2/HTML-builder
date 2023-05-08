const fs = require('fs');
const path = require('path');
const {stdin} = process;

console.log('Привет!');
fs.writeFile(path.join(__dirname, 'new-text.txt'));


stdin.write()