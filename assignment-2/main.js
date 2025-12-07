import path, { dirname } from "path";
import os from "os";
import fs from "fs";
import { EventEmitter } from "events";
import { fileURLToPath } from "url";

/**
 * 1- Write a function that logs the current file path and directory.
 */
function logCurrentFilePathAndDirectory() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  console.log("Current file path:", __filename);
  console.log("Current directory:", __dirname);
}
logCurrentFilePathAndDirectory();

console.log("==================================================");

/**
 * 2- Write a function that takes a file path and returns its file name.
 */
function getFileName(filePath) {
  console.log(`file path: ${path.basename(filePath)}`);
}
getFileName("/folder/route/folder2/index.js");

console.log("==================================================");

/**
 * 3- Write a function that builds a path from an object
 */
function buildPathFromObject({ root, dir, name, ext }) {
  const filePath = path.format({ root, dir, name, ext });
  console.log(`file path from object: ${filePath}`);
}
buildPathFromObject({
  root: "/",
  dir: "/folder/folder2",
  name: "index",
  ext: ".js",
});

console.log("==================================================");

/**
 * 4- Write a function that returns the file extension from a given file path.
 */
function getFileExtension(filepath) {
  console.log(`file extension: ${path.extname(filepath)}`);
}
getFileExtension("/folder/folder2/folder3/index.js");

console.log("==================================================");

/**
 * 5- Write a function that parses a given path and returns its name and ext.
 */
function parsePath(filePath) {
  const parsedPath = path.parse(filePath);
  const { name, ext } = parsedPath;
  console.log({ name, ext });
}
parsePath("/folder/folder2/folder3/index.js");

console.log("==================================================");

/**
 * 6- Write a function that checks whether a given path is absolute.
 */
function checkPathAbsolute(filePath) {
  const isAbsolute = path.isAbsolute(filePath);
  console.log(`result: ${isAbsolute}`);
}
checkPathAbsolute("/folder/folder2/folder3/index.js");

console.log("==================================================");

/**
 * 7- Write a function that joins multiple segments
 */
function joinMultipleSegments(...segments) {
  const joinedPath = path.join(...segments);
  console.log(`joined path: ${joinedPath}`);
}
joinMultipleSegments("folder", "folder2", "folder3", "main.js");

console.log("==================================================");

/**
 * 8- Write a function that resolves a relative path to an absolute one.
 */
function resolveRelativePath(file) {
  const absolutePath = path.resolve(file);
  console.log(`absolute path: ${absolutePath}`);
}
resolveRelativePath("file.txt");

console.log("==================================================");

/**
 * 9- Write a function that joins two paths.
 */
function joinTwoPaths({ path1, path2 }) {
  const joinedPath = path.join(path1, path2);
  console.log(`joined two paths: ${joinedPath}`);
}
joinTwoPaths({ path1: "folder/folder2", path2: "folder3/main.js" });

console.log("==================================================");

/**
 * 10- Write a function that deletes a file asynchronously.
 */
function deleteFileAsync(file) {
  const deleteFile = fs.promises.unlink(file);
  deleteFile
    .then(() => {
      console.log(`file deleted successfully: ${file}`);
    })
    .catch((err) => {
      console.log(`error deleting file: ${err.message}`);
    });
}
deleteFileAsync("file.txt");

console.log("==================================================");

/**
 * 11- Write a function that creates a folder synchronously.
 */
function createFolderSync(folderName) {
  try {
    const dir = fs.mkdirSync(folderName);
    console.log(`folder created successfully: ${folderName}`);
  } catch (error) {
    console.log(`error creating folder: ${error.message}`);
  }
}
createFolderSync("folder");

console.log("==================================================");

/**
 * 12- Create an event emitter that listens for a "start" event and logs a welcome message.
 */
function createStartEventEmitter() {
  const eventEmitter = new EventEmitter();

  eventEmitter.on("start", () => {
    console.log(`Welcome Welcome event triggered!`);
  });

  eventEmitter.emit("start");
}
createStartEventEmitter();

console.log("==================================================");

/**
 * 13- Emit a custom "login" event with a username parameter.
 */
function emitLoginEvent() {
  const eventEmitter = new EventEmitter();
  eventEmitter.on("login", (username) => {
    console.log(`User Logged In: ${username}`);
  });
  eventEmitter.emit("login", "mohamed khaled");
}
emitLoginEvent();

console.log("==================================================");

/**
 * 14- Read a file synchronously and log its contents.
 */
function readFileSync(file) {
  try {
    const readfile = fs.readFileSync(file, "utf-8");
    console.log(`file contents: ${readfile}`);
  } catch (error) {
    log(`error reading file: ${error.message}`);
  }
}
readFileSync("notes.txt");

console.log("==================================================");

/**
 * 15- Write asynchronously to a file.
 */
function writeFileAsync(fileName, content) {
  const writeFile = fs.promises.writeFile(fileName, content);
  writeFile
    .then(() => {
      console.log(`file written successfully: ${fileName}`);
    })
    .catch((err) => {
      console.log(`error writing file: ${err.message}`);
    });
}
writeFileAsync("async.txt", "Async Save");

console.log("==================================================");

/**
 * 16- Check if a directory exists.
 */
function checkDirExist(dirName) {
  const dirExist = fs.existsSync(dirName);
  console.log(`directory exists: ${dirExist}`);
}
checkDirExist("folder");

console.log("==================================================");

/**
 * 17- Write a function that returns the OS platform and CPU architecture.
 * @returns the OS platform and CPU architecture
 */
function plateForm() {
  const osPlateForm = os.platform();
  const osCpu = os.arch();

  return { osPlateForm, osCpu };
}
console.log(`OS Platform and CPU Architecture:`, plateForm());
