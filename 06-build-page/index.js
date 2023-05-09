const fs = require('fs');
const path = require('path');

//const pathMainFolder = path.join(__dirname, 'assets');
const pathNewFolder = path.join(__dirname, 'project-dist');

fs.mkdir(pathNewFolder, { recursive: true }, (err) => {
  if (err) console.log(err);
});

/*const obj = fs.promises.readdir(pathMainFolder);

obj.then(files => files.forEach(file => {

  const pathMainFile = path.resolve(pathMainFolder, file);
  const pathNewFile = path.resolve(pathNewFolder, file);

  fs.promises.copyFile(pathMainFile, pathNewFile);
})
);*/

//css

const pathNewFile = path.join(__dirname, 'project-dist', 'styles.css');
const pathMainFolder = path.join(__dirname, 'styles');

const obj = fs.promises.readdir(pathMainFolder, {withFileTypes: true});


obj.then(files => files.forEach(file => {
  if (file.isFile()) {

    const pathFile = path.join(__dirname, 'styles', file.name);
    const ext = path.extname(pathFile);

    if (ext === '.css') {
      const input = fs.createReadStream(pathFile, 'utf-8');
      const output = fs.createWriteStream(pathNewFile, 'utf-8');

      input.on('data', data => {
        output.write(data.toString());
      });
    }
  }
})
);