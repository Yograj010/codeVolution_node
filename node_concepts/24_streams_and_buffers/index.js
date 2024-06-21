const buffer = new Buffer.from("Yograj","utf-8");    //utf-8 is default encoding value for buffer, so we can omit it as parameter

console.log(buffer.toJSON());
console.log(buffer.toString());
console.log(buffer);
buffer.write("Adhi");
console.log(buffer.toString());
