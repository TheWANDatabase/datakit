"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const client_1 = require("./client");
async function wrapExec(command, args) {
    return new Promise((resolve, reject) => {
        let child = (0, child_process_1.spawn)(command, args, { stdio: 'inherit' });
        child.on('close', resolve);
    });
}
async function runMigrations() {
    // console.log("Generating migrations...")
    // let migrationsResults: any = {
    //   data: null,
    //   management: null,
    // }
    // console.log("> Generating data schema...")
    // migrationsResults.data = await wrapExec('npx', [
    //   "drizzle-kit",
    //   "generate:pg",
    //   "--schema=./src/schema",
    //   "--out=./migrations"
    // ]);
    console.log("Running migrations...");
    let client = new client_1.Client();
    console.log("> Running data schema migrations...");
    await client.migrate('./migrations');
}
runMigrations().then(() => console.log("Done!"), (e) => {
    console.error(e);
    console.error("Error! More information above.");
}).finally(() => process.exit(0));
