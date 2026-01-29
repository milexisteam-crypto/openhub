import readline from "readline";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url))
function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => rl.question(question, answer => {
    rl.close();
    resolve(answer);
  }));
}
const old = fs.readFileSync(path.join(__dirname, "version.txt"), "utf-8")
console.log("A - use for major changes that disrupt compatibility \nB - use for major changes that do not break compatibility \nC - use for code corrections, small improvements and appearance items (which do not count as B) \nM - Manual mode (manually enter versions)")
const option = await ask("what version parameter should I change?")

let version = fs.readFileSync(path.join(__dirname, "version.txt"), "utf-8")
switch (option) {
    case "A":
        version = version
  .split(".")
  .map((v, i) => i === 0 ? Number(v) + 1 : v)
  .join(".");
        break;
    case "B":
        version = version
  .split(".")
  .map((v, i) => i === 1 ? Number(v) + 1 : v)
  .join(".");
        break;
    case "C":
        version = version
  .split(".")
  .map((v, i) => i === 2 ? Number(v) + 1 : v)
  .join(".");
  break;
    case "M":
        version = await ask("Print the version: ")
    break;
}
fs.writeFileSync(path.join(__dirname, "version.txt"), version)
console.log("Changing package.json")
let packageConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json"), "utf-8"))
packageConfig.version = version;
fs.writeFileSync(path.join(__dirname, "package.json"), JSON.stringify(packageConfig))
console.log(`Succes change version: ${old} => ${version}` )
console.log("To update repo run ./automate.sh (linux) or automate (windows)")