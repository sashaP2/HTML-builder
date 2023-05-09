const fs = require('fs');
const path = require('path');

const pathMainFolder = path.join(__dirname, 'files');
const pathNewFolder = path.join(__dirname, 'files-copy');

fs.mkdir(pathNewFolder, { recursive: true }, (err) => {
    if (err) console.log(err);
});

const obj = fs.promises.readdir(pathMainFolder);

obj.then(files => files.forEach(file => {

  const pathMainFile = path.resolve(pathMainFolder, file);
  const pathNewFile = path.resolve(pathNewFolder, file);

  fs.promises.copyFile(pathMainFile, pathNewFile);
})
);