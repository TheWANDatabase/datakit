import {Pool} from "pg";
import {drizzle, NodePgDatabase} from "drizzle-orm/node-postgres";
import {migrate} from "drizzle-orm/node-postgres/migrator";
import 'dotenv/config'

export * as dataSchema from "./data-schema";
export * as managementSchema from "./management-schema";

const defaultConfig = {
  // ssl: {
  //   rejectUnauthorized: false,
  // },
};



export class Client {
  private readonly dataPool: Pool;
  private readonly managementPool: Pool;
  public data: NodePgDatabase<Record<string, never>>;
  public management: NodePgDatabase<Record<string, never>>;
  constructor() {
    this.dataPool = new Pool({
      connectionString: process.env.DATABASE_URL + '/data',
      ...defaultConfig,
    });

    this.managementPool = new Pool({
      connectionString: process.env.DATABASE_URL + '/management',
      ...defaultConfig,
    });

    this.data = drizzle(this.dataPool);
    this.management = drizzle(this.managementPool);
  }

  async migrate(db: NodePgDatabase<Record<string, never>>, migrationsFolder: string) {
    return migrate(db, {
      migrationsFolder: migrationsFolder
    })
  }
}