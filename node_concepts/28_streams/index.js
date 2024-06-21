const fs = require('fs');

const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf-8',
    highWaterMark: 2
});

const writeableStream = fs.createWriteStream('./file2.txt',)

readableStream.on('data', (chunk) => {
    console.log("readableStream chunk: ",chunk);
    writeableStream.write(chunk);
})