// Part 1
import fs from "fs";
import zlip from "zlib";

/**
 * 1- Use a readable stream to read a file in chunks and log each chunk.
 */
const readFile = fs.createReadStream("./textFiles/big.txt");

readFile.on("readable", () => {
  console.log("readable");
  readFile.read();
});
readFile.on("data", (data) => {
  console.log({ data });
});
readFile.on("error", (err) => {
  console.log(`Error: ${err}`);
});

/**
 * 2- Use readable and writable streams to copy content from one file to another.
 */
const copyFile = fs.createReadStream("./textFiles/source.txt", {
  encoding: "utf-8",
});
const writeFile = fs.createWriteStream("./textFiles/dest.txt", {
  encoding: "utf-8",
});
copyFile.on("readable", () => {
  copyFile.read();
});
copyFile.on("data", (data) => {
  writeFile.write(data);
});

/**
 * 3- Create a pipeline that reads a file, compresses it, and writes it to another file.
 */
const readStream = fs.createReadStream("./textFiles/data.txt");
const compressesFile = zlip.createGzip();
const writeStream = fs.createWriteStream("./textFiles/data.txt.gz");

readStream.pipe(compressesFile).pipe(writeStream);

writeStream.on("finish", () => {
  console.log("finish compress file");
});

readStream.on("error", (err) => {
  console.log(`ERROR: ${err}`);
});
compressesFile.on("error", (err) => {
  console.log(`ERROR: ${err}`);
});
writeStream.on("error", (err) => {
  console.log(`ERROR: ${err}`);
});
