export declare const speakers: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "episodes_speakers";
    schema: "data";
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "episodes_speakers";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        transcriptId: import("drizzle-orm/pg-core").PgColumn<{
            name: "transcript_id";
            tableName: "episodes_speakers";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        creditId: import("drizzle-orm/pg-core").PgColumn<{
            name: "credit_id";
            tableName: "episodes_speakers";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const speakersRelations: import("drizzle-orm").Relations<"episodes_speakers", {
    transcript: import("drizzle-orm").One<"episodes_transcripts", false>;
    credit: import("drizzle-orm").One<"cast_credits", false>;
}>;
//# sourceMappingURL=speakers.d.ts.map