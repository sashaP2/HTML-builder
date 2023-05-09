const path = require('path');
const fs = require('fs');

const pathFolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathFolder, {withFileTypes: true}, (err, files) => {
  if (err) console.log(err);

  files.forEach((key) => {
    if (key.isFile()) {

      const pathFile = path.join(pathFolder, key.name);

      fs.stat(pathFile, (err, files) => {
        if (err) console.log(err);

        const name = key.name.split('.')[0];
        const ext = path.extname(pathFile).slice(1);
        const size = files.size;
        const sizeKb = size/1024;

        console.log(`${name} -- ${ext} -- ${sizeKb}kb`);
      });
    }
  });
});