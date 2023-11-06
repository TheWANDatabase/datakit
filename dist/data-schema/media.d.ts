export declare const media: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "media";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "media";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        blur: import("drizzle-orm/pg-core").PgColumn<{
            name: "blur";
            tableName: "media";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        original: import("drizzle-orm/pg-core").PgColumn<{
            name: "original";
            tableName: "media";
            dataType: "json";
            columnType: "PgJsonb";
            data: OriginalMediaMetadata;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        additional: import("drizzle-orm/pg-core").PgColumn<{
            name: "additional";
            tableName: "media";
            dataType: "json";
            columnType: "PgJsonb";
            data: AdditionalMediaMetadata;
            driverParam: unknown;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        added: import("drizzle-orm/pg-core").PgColumn<{
            name: "added";
            tableName: "media";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        modified: import("drizzle-orm/pg-core").PgColumn<{
            name: "modified";
            tableName: "media";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        kind: import("drizzle-orm/pg-core").PgColumn<{
            name: "kind";
            tableName: "media";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        bytes: import("drizzle-orm/pg-core").PgColumn<{
            name: "bytes";
            tableName: "media";
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
export type OriginalMediaMetadata = {
    url: string;
    width: number;
    height: number;
    mime: string;
};
export type AdditionalMediaMetadata = {
    [key: string]: string;
};
//# sourceMappingURL=media.d.ts.map