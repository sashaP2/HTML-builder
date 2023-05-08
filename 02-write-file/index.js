const fs = require('fs');
const path = require('path');
const {stdin, stdout} = process;

const output = fs.createWriteStream(path.join(__dirname, 'new-text.txt'), 'utf-8');

stdout.write('Привет! Ваш текст...\n');

process.on('SIGINT', () => {
        console.log('Пока');
        process.exit();
});

stdin.on('data', data => {
    if(data.toString().trim() === "exit"){
        console.log('Пока');
        process.exit();
    }
});

stdin.on('data', data => output.write(data, 'utf-8'));