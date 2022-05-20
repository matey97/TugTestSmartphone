const path = require("path");
const fs = require("fs");

const googleServices = "google-services.json"
const androidResources = path.join(".", "App_Resources", "Android");

const sourcePath = path.join(androidResources, googleServices);

const destDir = path.join(".", "platforms", "android", "app");
const destPath = path.join(destDir, googleServices);

if (!fs.existsSync(sourcePath)) {
  console.log('\x1b[31m%s\x1b[0m', `Could not find file ${googleServices} in ${androidResources}`);
  process.exit(1);
}

if (!fs.existsSync(destDir)) {
  console.log('\x1b[31m%s\x1b[0m', `Could not copy file ${googleServices} to ${destDir}. Directory does not exist!`);
  process.exit(1);
}

console.log('\x1b[32m%s\x1b[0m', `Copying file ${googleServices} to ${destDir}`);
fs.writeFileSync(destPath, fs.readFileSync(sourcePath));
console.log('\x1b[32m%s\x1b[0m', `${googleServices} successfully copied!`);
