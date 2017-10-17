const path = require('path');
const fs = require('fs');
const modules = ['core', 'shapes', 'renderer'];

for (const m of modules) {
    fs.readFile(path.join(__dirname, 'src', m, 'package.json'), { encoding: 'utf-8' }, (err, data) => {
        if (err) throw err;
        fs.mkdir(path.join(__dirname, 'dist', m), undefined, _err => {
            fs.writeFile(path.join(__dirname, 'dist', m, 'package.json'), data, err => { if (err) throw err });
        });
    });
}
