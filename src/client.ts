import {Pool} from "pg";
import {drizzle, NodePgDatabase} from "drizzle-orm/node-postgres";
import {migrate} from "drizzle-orm/node-postgres/migrator";
import 'dotenv/config'

export * as dataSchema from "./schema";

const defaultConfig = {
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};



export class Client {
  private readonly dataPool: Pool;
  public data: NodePgDatabase<Record<string, never>>;
  constructor() {
    this.dataPool = new Pool({
      connectionString: process.env.DATABASE_URL + '/postgres',
      ...defaultConfig,
    });

    this.data = drizzle(this.dataPool);
  }

  async migrate(migrationsFolder: string) {
    return migrate(this.data, {
      migrationsFolder: migrationsFolder
    })
  }
}