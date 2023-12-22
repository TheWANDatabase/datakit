import {NodePgDatabase} from "drizzle-orm/node-postgres";
import 'dotenv/config';

export * as dataSchema from "./schema";

export declare enum ConType {
  SINGLE = 0,
  POOL = 1
}

export declare class Client {
  data: NodePgDatabase<Record<string, never>>;
  private readonly dataPool;

  constructor(ct?: ConType, mc?: number);

  migrate(migrationsFolder: string): Promise<void>;
}

//# sourceMappingURL=client.d.ts.map