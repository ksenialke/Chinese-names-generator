const fs = require('fs');
var content;
fs.readFile('syllables.txt', "utf8", function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    processFile();
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function processFile() {
    var surname;
    var name;
    var lines = content.split('\n');
    for (var line = 0; line < lines.length; line++) {
        lines[line] = lines[line].substring(1, lines[line].length - 1);
    }
    surname = capitalizeFirstLetter(lines[Math.floor(Math.random() * lines.length)]);
    name = capitalizeFirstLetter(lines[Math.floor(Math.random() * lines.length)] + lines[Math.floor(Math.random() * lines.length)]);
    console.log(`${surname} ${name}`)
}