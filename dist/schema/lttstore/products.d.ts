/**
 * @description The products table is used to store information about products
 * @field id - ID of the product
 * @field productId - The product ID of the product
 * @field importDate - The date that the product was imported
 * @field title - The title of the product
 * @field models - The models showing in the product images
 * @field prices - The prices of the product
 */
export declare const products: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "lttstore_products";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "lttstore_products";
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
            tableName: "lttstore_products";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        importDate: import("drizzle-orm/pg-core").PgColumn<{
            name: "import_date";
            tableName: "lttstore_products";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        title: import("drizzle-orm/pg-core").PgColumn<{
            name: "title";
            tableName: "lttstore_products";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        isOnSale: import("drizzle-orm/pg-core").PgColumn<{
            name: "is_on_sale";
            tableName: "lttstore_products";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        standardPrice: import("drizzle-orm/pg-core").PgColumn<{
            name: "standard_price";
            tableName: "lttstore_products";
            dataType: "number";
            columnType: "PgReal";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        salePrice: import("drizzle-orm/pg-core").PgColumn<{
            name: "sale_price";
            tableName: "lttstore_products";
            dataType: "number";
            columnType: "PgReal";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        variantCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "variant_count";
            tableName: "lttstore_products";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        type: import("drizzle-orm/pg-core").PgColumn<{
            name: "product_type";
            tableName: "lttstore_products";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        retired: import("drizzle-orm/pg-core").PgColumn<{
            name: "retired";
            tableName: "lttstore_products";
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
            tableName: "lttstore_products";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        supersededBy: import("drizzle-orm/pg-core").PgColumn<{
            name: "superseded_by";
            tableName: "lttstore_products";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const productsRelations: import("drizzle-orm").Relations<"lttstore_products", {
    images: import("drizzle-orm").Many<"lttstore_products">;
    supersededBy: import("drizzle-orm").One<"lttstore_products", true>;
}>;
//# sourceMappingURL=products.d.ts.map