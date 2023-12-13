const buf = new Buffer.alloc(1024, 2); // in bytes
console.log(buf); // <Buffer 02 02 02 02 02 02 02 02 02 02 ... (1kb length)

const strBuf = new Buffer.from('Some test string...');
console.log(strBuf[0]); // 83 <== 'S'

const strCopyBuf = new Buffer.from(strBuf);
console.log(strCopyBuf.toString()); // Some test string...

const newChar = "0xF1" + ('B').charCodeAt(0).toString(16);
console.log(newChar); // 0xF142

strBuf[5] = newChar;
console.log(strBuf.toString()); // Some Best string...

const destinBuf = new Buffer.from('0123456789-0123456789-01');
strBuf.copy(destinBuf);
console.log(destinBuf.toString());//Some Best string...89-01
