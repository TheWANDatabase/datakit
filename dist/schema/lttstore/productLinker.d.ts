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
    };
    dialect: "pg";
}>;
export declare const productLinkerRelations: import("drizzle-orm").Relations<"lttstore_product_linker", {
    product: import("drizzle-orm").One<"lttstore_products", false>;
    episode: import("drizzle-orm").One<"episodes", false>;
}>;
//# sourceMappingURL=productLinker.d.ts.map