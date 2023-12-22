import {Pool} from "pg";
import {drizzle, NodePgDatabase} from "drizzle-orm/node-postgres";
import {migrate} from "drizzle-orm/node-postgres/migrator";
import 'dotenv/config'

export * as dataSchema from "./schema";


export enum ConType {
  SINGLE,
  POOL
}


export class Client {
  public data: NodePgDatabase<Record<string, never>>;
  private readonly dataPool: Pool;

  constructor(ct: ConType = ConType.SINGLE, mc: number = 5) {
    switch (ct) {
      // The user has either chosen, or defaulted to using a single connection only.
      case ConType.SINGLE:
        this.dataPool = new Pool({
          connectionString: process.env.DATABASE_URL,
          max: 1
        });
        break

      case ConType.POOL:
        this.dataPool = new Pool({
          connectionString: process.env.DATABASE_URL,
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