const fs = require('fs');
const path = require('path');

const pathNewFolder = path.join(__dirname, 'project-dist');

fs.mkdir(pathNewFolder, { recursive: true }, (err) => {
  if (err) console.log(err);
});

//html
/*
const pathNewHTML = path.join(__dirname, 'project-dist', 'index.html');
const template = path.join(__dirname, 'template.html');
const components = path.join(__dirname, 'components');

const objHtml = fs.promises.readdir(template, {withFileTypes: true});
objHtml.then(files => files.forEach(file => {

}))

*/
//css

const pathNewFileCSS = path.join(__dirname, 'project-dist', 'styles.css');
const pathMainFolderCSS = path.join(__dirname, 'styles');

const obj = fs.promises.readdir(pathMainFolderCSS, {withFileTypes: true});


obj.then(files => files.forEach(file => {
  if (file.isFile()) {

    const pathFile = path.join(__dirname, 'styles', file.name);
    const ext = path.extname(pathFile);

    if (ext === '.css') {
      const input = fs.createReadStream(pathFile, 'utf-8');
      const output = fs.createWriteStream(pathNewFileCSS, 'utf-8');

      input.on('data', data => {
        output.write(data.toString());
      });
    }
  }
})
);

//assets

const pathMainFolder = path.join(__dirname, 'assets');
const pathNewAssets = path.join(__dirname, 'project-dist', 'assets');

fs.mkdir(pathNewAssets, { recursive: true }, (err) => {
  if (err) console.log(err);
});

const objAssets = fs.promises.readdir(pathMainFolder);

objAssets.then(files => files.forEach(file => {
  if(file.isFile()) {
    const pathMainFile = path.resolve(pathMainFolder, file.name);
    const pathNewFile = path.resolve(pathNewAssets, file.name);
    fs.promises.copyFile(pathMainFile, pathNewFile);
  }

  if(file.isDirectory()) {
    const pathMain = path.resolve(__dirname, 'assets', file.name);
    const pathNew = path.resolve(__dirname, 'project-dist', 'assets', file.name);
    fs.promises.copyFile(pathMain, pathNew);
  }

})
);