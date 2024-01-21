export declare const episodeMarkers: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "episodes_markers";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "episodes_markers";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        youtubeCaptions: import("drizzle-orm/pg-core").PgColumn<{
            name: "youtube_captions";
            tableName: "episodes_markers";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        floatplaneCaptions: import("drizzle-orm/pg-core").PgColumn<{
            name: "floatplane_captions";
            tableName: "episodes_markers";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        guest: import("drizzle-orm/pg-core").PgColumn<{
            name: "has_guest";
            tableName: "episodes_markers";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        live: import("drizzle-orm/pg-core").PgColumn<{
            name: "is_live";
            tableName: "episodes_markers";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        contentWarning: import("drizzle-orm/pg-core").PgColumn<{
            name: "has_content_warning";
            tableName: "episodes_markers";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        corrupt: import("drizzle-orm/pg-core").PgColumn<{
            name: "is_corrupt";
            tableName: "episodes_markers";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        merchMessages: import("drizzle-orm/pg-core").PgColumn<{
            name: "has_merch_messages";
            tableName: "episodes_markers";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        productLaunch: import("drizzle-orm/pg-core").PgColumn<{
            name: "has_product_launch";
            tableName: "episodes_markers";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        topicCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "topic_count";
            tableName: "episodes_markers";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        productCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "product_count";
            tableName: "episodes_markers";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        castCount: import("drizzle-orm/pg-core").PgColumn<{
            name: "cast_count";
            tableName: "episodes_markers";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const episodeMarkersRelations: import("drizzle-orm").Relations<"episodes_markers", {
    episode: import("drizzle-orm").One<"episodes", false>;
}>;
//# sourceMappingURL=episodeMarkers.d.ts.map