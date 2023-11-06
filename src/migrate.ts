import {exec, spawn} from "child_process";
import {Client} from "./client";

async function wrapExec(command: string, args: string[]) {
  return new Promise((resolve, reject) => {
    let child = spawn(command, args, {stdio: 'inherit'});
    child.on('close', resolve);
  })
}

async function runMigrations() {
  console.log("Generating migrations...")
  let migrationsResults: any = {
    data: null,
    management: null,
  }


  console.log("> Generating data schema...")
  migrationsResults.data = await wrapExec('npx', [
    "drizzle-kit",
    "generate:pg",
    "--schema=./src/data-schema",
    "--out=./migrations/data-schema"
  ]);

  console.log("> Generating management schema...")
  migrationsResults.management = await wrapExec('npx', [
    "drizzle-kit",
    "generate:pg",
    "--schema=./src/management-schema",
    "--out=./migrations/management-schema"
  ]);


  console.log("Running migrations...")
  let client = new Client();

  console.log("> Running data schema migrations...")
  await client.migrate(client.data, './migrations/data-schema');

  console.log("> Running management schema migrations...")
  await client.migrate(client.management, './migrations/management-schema');

}

runMigrations().then(() => console.log("Done!"), (e: any) => {
  console.error(e);
  console.error("Error! More information above.")
}).finally(() => process.exit(0));