const path  = require("node:path");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.extname(__dirname));
console.log(path.extname(__filename));

console.log(path.parse(__dirname));
console.log(path.parse(__filename));

console.log("-----path.format----")
console.log(path.format(path.parse(__dirname)));
console.log(path.format(path.parse(__filename)));

console.log("----path.isAbsolute-----")
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./index.js'));

console.log("-----path.join-----")
console.log(path.join("folder1", "folder2", "index.js"));
console.log(path.join("/folder1", "folder2", "index.js"));
console.log(path.join("/folder1", "//folder2", "index.js"));
console.log(path.join("/folder1", "//folder2", "../index.js"));
console.log(path.join(__dirname, "data.json"));

console.log("-----path.resolve-----")
console.log(path.resolve("folder1", "folder2", "index.js"));
console.log(path.resolve("/folder1", "folder2", "index.js"));
console.log(path.resolve("/folder1", "//folder2", "index.js"));
console.log(path.resolve("/folder1", "//folder2", "../index.js"));
console.log(path.resolve(__dirname, "data.json"));
