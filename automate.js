import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { spawn } from "child_process"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function run(cmd, args, cwd) {
    return new Promise((resolve, reject) => {
        const p = spawn(cmd, args, { cwd })

        p.stdout.on("data", d => process.stdout.write(d.toString()))
        p.stderr.on("data", d => process.stderr.write(d.toString()))

        p.on("close", code => {
            if (code === 0) resolve()
            else reject(new Error(`${cmd} exited with code ${code}`))
        })
    })
}

console.log("Parsing version file")
const versionfile = fs.readFileSync(path.join(__dirname, "version.txt"), "utf-8")
const [versionA, versionB, versionC] = versionfile.split(".")

console.log("Parsing template file...")
let template = fs.readFileSync(path.join(__dirname, "template.txt"), "utf-8")
template = template
    .replaceAll("[a]", versionA)
    .replaceAll("[b]", versionB)
    .replaceAll("[c]", versionC)

console.log("Final commit name:", template)

async function main() {
    console.log("Adding files to git...")
    await run("git", ["add", "."], __dirname)

    console.log("Committing...")
    await run("git", ["commit", "-m", template], __dirname)

    console.log("Pushing...")
    await run("git", ["push"], __dirname)

    console.log("Done!")
}

main().catch(err => console.error(err))