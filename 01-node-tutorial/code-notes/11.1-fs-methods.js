// added by me

const fs = require('fs')

// Create a new file using the appendFile() method
fs.appendFile('./content/mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

//Create a new, empty file using the open() method
fs.open('./content/mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// Create a new file using the writeFile() method
fs.writeFile('./content/mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// Append "This is my text." to the end of the file "mynewfile1.txt"
fs.appendFile('./content/mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

// Replace the content of the file "mynewfile3.txt"
fs.writeFile('./content/mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

// Delete "mynewfile2.txt"
fs.unlink('./content/mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});

// Rename "mynewfile1.txt" to "myrenamedfile.txt"
fs.rename('./content/mynewfile1.txt', './content/myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});

// read file
fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
});

// create folder
if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created')
    });
}

// remove folder
if (!fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed')
    });
}