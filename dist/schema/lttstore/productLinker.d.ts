export declare const productLinker: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "lttstore_product_linker";
  schema: "data";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "lttstore_product_linker";
      dataType: "number";
      columnType: "PgSerial";
      data: number;
      driverParam: number;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    productId: import("drizzle-orm/pg-core").PgColumn<{
      name: "product_id";
      tableName: "lttstore_product_linker";
      dataType: "number";
      columnType: "PgInteger";
      data: number;
      driverParam: string | number;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    variantId: import("drizzle-orm/pg-core").PgColumn<{
      name: "variant_ids";
      tableName: "lttstore_product_linker";
      dataType: "json";
      columnType: "PgJsonb";
      data: string[];
      driverParam: unknown;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    episodeId: import("drizzle-orm/pg-core").PgColumn<{
      name: "episode_id";
      tableName: "lttstore_product_linker";
      dataType: "string";
      columnType: "PgVarchar";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    isLaunch: import("drizzle-orm/pg-core").PgColumn<{
      name: "is_launch";
      tableName: "lttstore_product_linker";
      dataType: "boolean";
      columnType: "PgBoolean";
      data: boolean;
      driverParam: boolean;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
  };
  dialect: "pg";
}>;
export declare const productLinkerRelations: import("drizzle-orm").Relations<"lttstore_product_linker", {
  product: import("drizzle-orm").One<"lttstore_variants", false>;
  episode: import("drizzle-orm").One<"episodes", false>;
}>;
//# sourceMappingURL=productLinker.d.ts.map