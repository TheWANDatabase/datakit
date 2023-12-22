import {Client as DBClient, Pool} from "pg";
import {drizzle, NodePgDatabase} from "drizzle-orm/node-postgres";
import {migrate} from "drizzle-orm/node-postgres/migrator";
import 'dotenv/config'

export * as dataSchema from "./schema";

const defaultConfig = {
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  maxConnections: 5,

};

export enum ConType {
  SINGLE,
  POOL
}


export class Client {
  public data: NodePgDatabase<Record<string, never>>;
  private readonly dataPool: Pool | DBClient;

  constructor(ct: ConType = ConType.SINGLE, mc: number = 5) {
    switch (ct) {
      // The user has either chosen, or defaulted to using a single connection only.
      case ConType.SINGLE:
        this.dataPool = new DBClient({
          connectionString: process.env.DATABASE_URL,
          ...defaultConfig,
        });
        break

      case ConType.POOL:
        this.dataPool = new Pool({
          connectionString: process.env.DATABASE_URL,
          ...defaultConfig,
          max: mc
        });
    }

    this.data = drizzle(this.dataPool);
  }

  async migrate(migrationsFolder: string) {
    return migrate(this.data, {
      migrationsFolder: migrationsFolder
    })
  }
}