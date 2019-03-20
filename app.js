const fs = require('fs');
fs.readFile('syllables.txt', "utf8", function read(err, data) {
    if (err) {
        throw err;
    }
    processFile(data);
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getSyllable(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

function processFile(data) {
    var surname;
    var name;
    var lines = data.split('\n');
    for (var line = 0; line < lines.length; line++) {
        lines[line] = lines[line].substring(1, lines[line].length - 1);
    }
    surname = capitalizeFirstLetter(getSyllable(lines));
    name = capitalizeFirstLetter(getSyllable(lines) + getSyllable(lines));
    console.log(`${surname} ${name}`)
}