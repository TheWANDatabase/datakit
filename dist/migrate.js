"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const client_1 = require("./client");
async function runMigrations() {
    console.log("Generating migrations...");
    let migrationsResuls = {
        data: null,
        management: null,
    };
    console.log("> Generating data schema...");
    migrationsResuls.data = (0, child_process_1.execSync)('npx drizzle-kit generate:pg --schema=./src/data-schema --out=./migrations/data-schema');
    console.log("> Generating management schema...");
    migrationsResuls.management = (0, child_process_1.execSync)('npx drizzle-kit generate:pg --schema=./src/management-schema --out=./migrations/management-schema');
    console.log("Running migrations...");
    let client = new client_1.Client();
    console.log("> Running data schema migrations...");
    await client.migrate(client.data, './migrations/data-schema');
    console.log("> Running management schema migrations...");
    await client.migrate(client.management, './migrations/management-schema');
}
runMigrations().then(() => console.log("Done!"), (e) => {
    console.error(e);
    console.error("Error! More information above.");
}).finally(() => process.exit(0));
