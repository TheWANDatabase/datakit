/**
 * PermissionsEnum
 * @enum {number}
 * @export
 * @readonly
 * @description PermissionsEnum represents the permissions that a user can have.
 * @example PermissionsEnum.EARLY_ACCESS_USER | PermissionsEnum.ADD_EPISODE
 */
export declare enum PermissionsEnum {
  /**
   * NONE
   * @description Allows the user to do as if they were logged out of the site entirely.
   */
  NONE = 0,
  /**
   * EARLY_ACCESS
   * @description Allows the user to choose which development branch they'd like to be served.
   */
  EARLY_ACCESS = 1,
  /**
   * ADD_EPISODE
   * @description Allows the user to add an episode to the archive.
   * @see PermissionsEnum.PROPOSE_EPISODE
   */
  ADD_EPISODE = 2,
  /**
   * PROPOSE_EPISODE
   * @description Allows the user to propose an episode to be added to the archive.
   * @see PermissionsEnum.ADD_EPISODE
   */
  PROPOSE_EPISODE = 4,
  /**
   * ACCEPT_EPISODE
   * @description Allows the user to accept a proposed episode to be added to the archive.
   */
  ACCEPT_EPISODE = 8,
  /**
   * EDIT_EPISODE
   * @description Allows the user to edit an episode in the archive.
   */
  EDIT_EPISODE = 16,
  /**
   * DELETE_EPISODE
   * @description Allows the user to delete an episode from the archive.
   */
  DELETE_EPISODE = 32,
  /**
   * ADD_CAST
   * @description Allows the user to add a cast member to the archive.
   * @see PermissionsEnum.PROPOSE_CAST
   */
  ADD_CAST = 64,
  /**
   * PROPOSE_CAST
   * @description Allows the user to propose a cast member to be added to the archive.
   * @see PermissionsEnum.ADD_CAST
   */
  PROPOSE_CAST = 128,
  /**
   * ACCEPT_CAST
   * @description Allows the user to accept a proposed cast member to be added to the archive.
   */
  ACCEPT_CAST = 256,
  /**
   * EDIT_CAST
   * @description Allows the user to edit a cast member in the archive.
   */
  EDIT_CAST = 512,
  /**
   * DELETE_CAST
   * @description Allows the user to delete a cast member from the archive.
   */
  DELETE_CAST = 1024,
  /**
   * ADD_TOPIC
   * @description Allows the user to add a topic to the archive.
   * @see PermissionsEnum.PROPOSE_TOPIC
   */
  ADD_TOPIC = 2048,
  /**
   * PROPOSE_TOPIC
   * @description Allows the user to propose a topic to be added to the archive.
   * @see PermissionsEnum.ADD_TOPIC
   */
  PROPOSE_TOPIC = 4096,
  /**
   * ACCEPT_TOPIC
   * @description Allows the user to accept a proposed topic to be added to the archive.
   */
  ACCEPT_TOPIC = 8192,
  /**
   * EDIT_TOPIC
   * @description Allows the user to edit a topic in the archive.
   */
  EDIT_TOPIC = 16384,
  /**
   * DELETE_TOPIC
   * @description Allows the user to delete a topic from the archive.
   */
  DELETE_TOPIC = 32768,
  /**
   * ADD_SPONSOR
   * @description Allows the user to add a sponsor to the archive.
   * @see PermissionsEnum.PROPOSE_SPONSOR
   */
  ADD_SPONSOR = 65536,
  /**
   * PROPOSE_SPONSOR
   * @description Allows the user to propose a sponsor to be added to the archive.
   * @see PermissionsEnum.ADD_SPONSOR
   */
  PROPOSE_SPONSOR = 131072,
  /**
   * ACCEPT_SPONSOR
   * @description Allows the user to accept a proposed sponsor to be added to the archive.
   */
  ACCEPT_SPONSOR = 262144,
  /**
   * EDIT_SPONSOR
   * @description Allows the user to edit a sponsor in the archive.
   */
  EDIT_SPONSOR = 524288,
  /**
   * DELETE_SPONSOR
   * @description Allows the user to delete a sponsor from the archive.
   */
  DELETE_SPONSOR = 1048576,
  /**
   * ADD_MERCH
   * @description Allows the user to add a merch item to the archive.
   */
  ADD_MERCH = 2097152,
  /**
   * PROPOSE_MERCH
   * @description Allows the user to propose a merch item to be added to the archive.
   */
  PROPOSE_MERCH = 4194304,
  /**
   * ACCEPT_MERCH
   * @description Allows the user to accept a proposed merch item to be added to the archive.
   */
  ACCEPT_MERCH = 8388608,
  /**
   * EDIT_MERCH
   * @description Allows the user to edit a merch item in the archive.
   */
  EDIT_MERCH = 16777216,
  /**
   * DELETE_MERCH
   * @description Allows the user to delete a merch item from the archive.
   */
  DELETE_MERCH = 33554432,
  /**
   * ADD_MERCH_MESSAGE
   * @description Allows the user to add a merch message to the archive.
   */
  ADD_MERCH_MESSAGE = 67108864,
  /**
   * PROPOSE_MERCH_MESSAGE
   * @description Allows the user to propose a merch message to be added to the archive.
   */
  PROPOSE_MERCH_MESSAGE = 134217728,
  /**
   * ACCEPT_MERCH_MESSAGE
   * @description Allows the user to accept a proposed merch message to be added to the archive.
   */
  ACCEPT_MERCH_MESSAGE = 268435456,
  /**
   * EDIT_MERCH_MESSAGE
   * @description Allows the user to edit a merch message in the archive.
   */
  EDIT_MERCH_MESSAGE = 536870912,
  /**
   * DELETE_MERCH_MESSAGE
   * @description Allows the user to delete a merch message from the archive.
   */
  DELETE_MERCH_MESSAGE = 1073741824,
  /**
   * ADD_AWARD
   * @description Allows the user to add an award which can be given to other users.
   * @see PermissionsEnum.PROPOSE_AWARD
   */
  ADD_AWARD = -2147483648,
  /**
   * PROPOSE_AWARD
   * @description Allows the user to propose an award to be added to the archive.
   * @see PermissionsEnum.ADD_AWARD
   */
  PROPOSE_AWARD = 1,
  /**
   * ACCEPT_AWARD
   * @description Allows the user to accept a proposed award to be added to the archive.
   */
  ACCEPT_AWARD = 2,
  /**
   * EDIT_AWARD
   * @description Allows the user to edit an award in the archive.
   */
  EDIT_AWARD = 4,
  /**
   * DELETE_AWARD
   * @description Allows the user to delete an award from the archive.
   */
  DELETE_AWARD = 8,
  /**
   * MODIFY_USER
   * @description Allows the user to modify another user's account.
   */
  MODIFY_USER = 16,
  /**
   * MODIFY_PERMISSIONS
   * @description Allows the user to modify another user's permissions.
   */
  MODIFY_PERMISSIONS = 32,
  /**
   * ADD_BANNER
   * @description Allows the user to add a banner to the archive.
   */
  ADD_BANNER = 64,
  /**
   * PROPOSE_BANNER
   * @description Allows the user to propose a banner to be added to the archive.
   */
  PROPOSE_BANNER = 128,
  /**
   * ACCEPT_BANNER
   * @description Allows the user to accept a proposed banner to be added to the archive.
   */
  ACCEPT_BANNER = 256,
  /**
   * EDIT_BANNER
   * @description Allows the user to edit a banner in the archive.
   */
  EDIT_BANNER = 512,
  /**
   * DELETE_BANNER
   * @description Allows the user to delete a banner from the archive.
   */
  DELETE_BANNER = 1024,
  /**
   * ACCESS_BETA
   * @description Allows the user to access the beta version of the site.
   */
  ACCESS_BETA = 2048,
  /**
   * ACCESS_ALPHA
   * @description Allows the user to access the alpha version of the site.
   */
  ACCESS_ALPHA = 4096,
  /**
   * ACCESS_DEV
   * @description Allows the user to access the development version of the site.
   */
  ACCESS_DEV = 8192,
  /**
   * ADMIN_PANEL
   * @description Allows the user to access the admin panel.
   */
  ADMIN_PANEL = 16384,
  /**
   * USER
   * @description Equivalent to PermissionsEnum.NONE
   * @see PermissionsEnum.NONE
   */
  USER = 0,
  /**
   * EARLY_ACCESS_USER
   * @description Equivalent to PermissionsEnum.EARLY_ACCESS
   * @see PermissionsEnum.EARLY_ACCESS
   */
  EARLY_ACCESS_USER = 1,
  /**
   * ARCHIVIST
   * @description Rank given to users who are able to propose new content and modifications to existing content.
   * @see PermissionsEnum.ADD_EPISODE
   * @see PermissionsEnum.ADD_CAST
   * @see PermissionsEnum.ADD_TOPIC
   * @see PermissionsEnum.ADD_SPONSOR
   * @see PermissionsEnum.ADD_MERCH
   * @see PermissionsEnum.ADD_MERCH_MESSAGE
   */
  ARCHIVIST = 138547332,
  /**
   * GILDED_ARCHIVIST
   * @description Rank given to users who are able to accept proposed content and modifications to existing content.
   * @see PermissionsEnum.ACCEPT_EPISODE
   * @see PermissionsEnum.ACCEPT_CAST
   * @see PermissionsEnum.ACCEPT_TOPIC
   * @see PermissionsEnum.ACCEPT_SPONSOR
   * @see PermissionsEnum.ACCEPT_MERCH
   * @see PermissionsEnum.ACCEPT_MERCH_MESSAGE
   * @see PermissionsEnum.ARCHIVIST
   */
  GILDED_ARCHIVIST = 415641996,
  /**
   * ADMIN
   * @description Rank given to users who are able to modify the site's content and settings. With great power comes great responsibility.
   * @see PermissionsEnum.GILDED_ARCHIVIST
   * @see PermissionsEnum.ADD_EPISODE
   * @see PermissionsEnum.EDIT_EPISODE
   * @see PermissionsEnum.DELETE_EPISODE
   * @see PermissionsEnum.ADD_CAST
   * @see PermissionsEnum.EDIT_CAST
   * @see PermissionsEnum.DELETE_CAST
   * @see PermissionsEnum.ADD_TOPIC
   * @see PermissionsEnum.EDIT_TOPIC
   * @see PermissionsEnum.DELETE_TOPIC
   * @see PermissionsEnum.ADD_SPONSOR
   * @see PermissionsEnum.EDIT_SPONSOR
   * @see PermissionsEnum.DELETE_SPONSOR
   * @see PermissionsEnum.ADD_MERCH
   * @see PermissionsEnum.EDIT_MERCH
   * @see PermissionsEnum.DELETE_MERCH
   * @see PermissionsEnum.ADD_MERCH_MESSAGE
   * @see PermissionsEnum.EDIT_MERCH_MESSAGE
   * @see PermissionsEnum.DELETE_MERCH_MESSAGE
   * @see PermissionsEnum.ADD_AWARD
   * @see PermissionsEnum.EDIT_AWARD
   * @see PermissionsEnum.DELETE_AWARD
   * @see PermissionsEnum.MODIFY_USER
   * @see PermissionsEnum.MODIFY_PERMISSIONS
   * @see PermissionsEnum.ADD_BANNER
   * @see PermissionsEnum.EDIT_BANNER
   * @see PermissionsEnum.DELETE_BANNER
   * @see PermissionsEnum.ACCESS_BETA
   * @see PermissionsEnum.ACCESS_ALPHA
   * @see PermissionsEnum.ACCESS_DEV
   * @see PermissionsEnum.ADMIN_PANEL
   * @see PermissionsEnum.EARLY_ACCESS
   * @see PermissionsEnum.EARLY_ACCESS_USER
   * @see PermissionsEnum.ARCHIVIST
   * @see PermissionsEnum.GILDED_ARCHIVIST
   */
  ADMIN = -2,
  /**
   * OWNER
   * @description Rank given to only the owner of the site. This rank is not given to anyone else. It is the highest rank, and has all permissions enabled.
   * @see PermissionsEnum.ADMIN | PermissionsEnum.EARLY_ACCESS
   */
  OWNER = -1
}

export declare class Permissions {
  permissions: number;

  constructor(permissions: number);

  get value(): number;
  set value(value: number);

  has(permission: PermissionsEnum): boolean;

  add(permission: PermissionsEnum): void;

  remove(permission: PermissionsEnum): void;

  set(permission: PermissionsEnum, value: boolean): void;

  serialize(): number;
}

export declare const accounts: import("drizzle-orm/pg-core").PgTableWithColumns<{
  name: "users_accounts";
  schema: "data"; /**
   * ADD_CAST
   * @description Allows the user to add a cast member to the archive.
   * @see PermissionsEnum.PROPOSE_CAST
   */
  columns: {
    id: import("drizzle-orm/pg-core").PgColumn<{
      name: "uuid";
      tableName: "users_accounts";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: true;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    displayName: import("drizzle-orm/pg-core").PgColumn<{
      name: "display_name";
      tableName: "users_accounts";
      dataType: "string";
      columnType: "PgText";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: [string, ...string[]];
      baseColumn: never;
    }, {}, {}>;
    avatar: import("drizzle-orm/pg-core").PgColumn<{
      name: "avatar";
      tableName: "users_accounts";
      dataType: "string";
      columnType: "PgUUID";
      data: string;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    created: import("drizzle-orm/pg-core").PgColumn<{
      name: "created";
      tableName: "users_accounts";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: true;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    lastSeen: import("drizzle-orm/pg-core").PgColumn<{
      name: "last_seen";
      tableName: "users_accounts";
      dataType: "date";
      columnType: "PgTimestamp";
      data: Date;
      driverParam: string;
      notNull: false;
      hasDefault: false;
      enumValues: undefined;
      baseColumn: never;
    }, {}, {}>;
    permissionInt: import("drizzle-orm/pg-core").PgColumn<{
      name: "permissions";
      tableName: "users_accounts";
      dataType: "number";
      columnType: "PgBigInt53";
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
export declare const accountsRelations: import("drizzle-orm").Relations<"users_accounts", {
  avatar: import("drizzle-orm").One<"media", false>;
}>;
//# sourceMappingURL=accounts.d.ts.map