export declare const variants: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "lttstore_variants";
  schema: "data";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "lttstore_variants";
      dataType: "number";
      columnType: "PgBigInt53";
      data: number;
      driverParam: string | number;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    productId: import("drizzle-orm/pg-core").PgColumn<{
      name: "product_id";
      tableName: "lttstore_variants";
      dataType: "number";
      columnType: "PgInteger";
      data: number;
      driverParam: string | number;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    price: import("drizzle-orm/pg-core").PgColumn<{
      name: "price";
      tableName: "lttstore_variants";
      dataType: "string";
      columnType: "PgNumeric";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    salePrice: import("drizzle-orm/pg-core").PgColumn<{
      name: "sale_price";
      tableName: "lttstore_variants";
      dataType: "string";
      columnType: "PgNumeric";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    onSale: import("drizzle-orm/pg-core").PgColumn<{
      name: "is_on_sale";
      tableName: "lttstore_variants";
      dataType: "boolean";
      columnType: "PgBoolean";
      data: boolean;
      driverParam: boolean;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    name: import("drizzle-orm/pg-core").PgColumn<{
      name: "name";
      tableName: "lttstore_variants";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    weight: import("drizzle-orm/pg-core").PgColumn<{
      name: "weight";
      tableName: "lttstore_variants";
      dataType: "number";
      columnType: "PgInteger";
      data: number;
      driverParam: string | number;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    colorway: import("drizzle-orm/pg-core").PgColumn<{
      name: "colorway";
      tableName: "lttstore_variants";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    size: import("drizzle-orm/pg-core").PgColumn<{
      name: "size";
      tableName: "lttstore_variants";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    image: import("drizzle-orm/pg-core").PgColumn<{
      name: "image";
      tableName: "lttstore_variants";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    retired: import("drizzle-orm/pg-core").PgColumn<{
      name: "retired";
      tableName: "lttstore_variants";
      dataType: "boolean";
      columnType: "PgBoolean";
      data: boolean;
      driverParam: boolean;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    isOutOfStock: import("drizzle-orm/pg-core").PgColumn<{
      name: "is_out_of_stock";
      tableName: "lttstore_variants";
      dataType: "boolean";
      columnType: "PgBoolean";
      data: boolean;
      driverParam: boolean;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    lastUpdated: import("drizzle-orm/pg-core").PgColumn<{
      name: "last_updated";
      tableName: "lttstore_variants";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    imageCount: import("drizzle-orm/pg-core").PgColumn<{
      name: "image_count";
      tableName: "lttstore_variants";
      dataType: "number";
      columnType: "PgBigInt53";
      data: number;
      driverParam: string | number;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    featureCount: import("drizzle-orm/pg-core").PgColumn<{
      name: "feature_count";
      tableName: "lttstore_variants";
      dataType: "number";
      columnType: "PgBigInt53";
      data: number;
      driverParam: string | number;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
  };
  dialect: "pg";
}>;
//# sourceMappingURL=variants.d.ts.map