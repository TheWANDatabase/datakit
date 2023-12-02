export declare const comments: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "topics_comments";
  schema: "data";
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "id";
      tableName: "topics_comments";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    changeId: import("drizzle-orm/pg-core").PgColumn<{
      name: "change_id";
      tableName: "topics_comments";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    message: import("drizzle-orm/pg-core").PgColumn<{
      name: "message";
      tableName: "topics_comments";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    added: import("drizzle-orm/pg-core").PgColumn<{
      name: "added";
      tableName: "topics_comments";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    authorId: import("drizzle-orm/pg-core").PgColumn<{
      name: "author";
      tableName: "topics_comments";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
  };
  dialect: "pg";
}>;
export declare const commentsRelations: import("drizzle-orm").Relations<"topics_comments", {
  change: import("drizzle-orm").One<any, false>;
  author: import("drizzle-orm").One<"users_accounts", false>;
}>;
//# sourceMappingURL=comments.d.ts.map