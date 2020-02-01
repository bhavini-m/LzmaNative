var fs  = require('fs');
var lzma = require('lzma-native');
 
var compressor = lzma.createCompressor();
var input = fs.createReadStream('input.rtf');
var output = fs.createWriteStream('output.txt');
 
input.pipe(compressor).pipe(output);