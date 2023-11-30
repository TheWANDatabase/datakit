import {bigint, serial, text, timestamp, uuid} from "drizzle-orm/pg-core";
import {media} from "../media";
import {relations} from "drizzle-orm";
import {dataSchema} from "../schema";

/**
 * PermissionsEnum
 * @enum {number}
 * @export
 * @readonly
 * @description PermissionsEnum represents the permissions that a user can have.
 * @example PermissionsEnum.EARLY_ACCESS_USER | PermissionsEnum.ADD_EPISODE
 */
export enum PermissionsEnum {
  /**
   * NONE
   * @description Allows the user to do as if they were logged out of the site entirely.
   */
  NONE = 0,


  /**
   * EARLY_ACCESS
   * @description Allows the user to choose which development branch they'd like to be served.
   */
  EARLY_ACCESS = 1 << 0,

  /**
   * ADD_EPISODE
   * @description Allows the user to add an episode to the archive.
   * @see PermissionsEnum.PROPOSE_EPISODE
   */
  ADD_EPISODE = 1 << 1,

  /**
   * PROPOSE_EPISODE
   * @description Allows the user to propose an episode to be added to the archive.
   * @see PermissionsEnum.ADD_EPISODE
   */
  PROPOSE_EPISODE = 1 << 2,

  /**
   * ACCEPT_EPISODE
   * @description Allows the user to accept a proposed episode to be added to the archive.
   */
  ACCEPT_EPISODE = 1 << 3,

  /**
   * EDIT_EPISODE
   * @description Allows the user to edit an episode in the archive.
   */
  EDIT_EPISODE = 1 << 4,

  /**
   * DELETE_EPISODE
   * @description Allows the user to delete an episode from the archive.
   */
  DELETE_EPISODE = 1 << 5,

  /**
   * ADD_CAST
   * @description Allows the user to add a cast member to the archive.
   * @see PermissionsEnum.PROPOSE_CAST
   */
  ADD_CAST = 1 << 6,

  /**
   * PROPOSE_CAST
   * @description Allows the user to propose a cast member to be added to the archive.
   * @see PermissionsEnum.ADD_CAST
   */
  PROPOSE_CAST = 1 << 7,

  /**
   * ACCEPT_CAST
   * @description Allows the user to accept a proposed cast member to be added to the archive.
   */
  ACCEPT_CAST = 1 << 8,

  /**
   * EDIT_CAST
   * @description Allows the user to edit a cast member in the archive.
   */
  EDIT_CAST = 1 << 9,

  /**
   * DELETE_CAST
   * @description Allows the user to delete a cast member from the archive.
   */
  DELETE_CAST = 1 << 10,

  /**
   * ADD_TOPIC
   * @description Allows the user to add a topic to the archive.
   * @see PermissionsEnum.PROPOSE_TOPIC
   */
  ADD_TOPIC = 1 << 11,

  /**
   * PROPOSE_TOPIC
   * @description Allows the user to propose a topic to be added to the archive.
   * @see PermissionsEnum.ADD_TOPIC
   */
  PROPOSE_TOPIC = 1 << 12,

  /**
   * ACCEPT_TOPIC
   * @description Allows the user to accept a proposed topic to be added to the archive.
   */
  ACCEPT_TOPIC = 1 << 13,

  /**
   * EDIT_TOPIC
   * @description Allows the user to edit a topic in the archive.
   */
  EDIT_TOPIC = 1 << 14,

  /**
   * DELETE_TOPIC
   * @description Allows the user to delete a topic from the archive.
   */
  DELETE_TOPIC = 1 << 15,

  /**
   * ADD_SPONSOR
   * @description Allows the user to add a sponsor to the archive.
   * @see PermissionsEnum.PROPOSE_SPONSOR
   */
  ADD_SPONSOR = 1 << 16,

  /**
   * PROPOSE_SPONSOR
   * @description Allows the user to propose a sponsor to be added to the archive.
   * @see PermissionsEnum.ADD_SPONSOR
   */
  PROPOSE_SPONSOR = 1 << 17,

  /**
   * ACCEPT_SPONSOR
   * @description Allows the user to accept a proposed sponsor to be added to the archive.
   */
  ACCEPT_SPONSOR = 1 << 18,

  /**
   * EDIT_SPONSOR
   * @description Allows the user to edit a sponsor in the archive.
   */
  EDIT_SPONSOR = 1 << 19,

  /**
   * DELETE_SPONSOR
   * @description Allows the user to delete a sponsor from the archive.
   */
  DELETE_SPONSOR = 1 << 20,

  /**
   * ADD_MERCH
   * @description Allows the user to add a merch item to the archive.
   */
  ADD_MERCH = 1 << 21,

  /**
   * PROPOSE_MERCH
   * @description Allows the user to propose a merch item to be added to the archive.
   */
  PROPOSE_MERCH = 1 << 22,

  /**
   * ACCEPT_MERCH
   * @description Allows the user to accept a proposed merch item to be added to the archive.
   */
  ACCEPT_MERCH = 1 << 23,

  /**
   * EDIT_MERCH
   * @description Allows the user to edit a merch item in the archive.
   */
  EDIT_MERCH = 1 << 24,

  /**
   * DELETE_MERCH
   * @description Allows the user to delete a merch item from the archive.
   */
  DELETE_MERCH = 1 << 25,

  /**
   * ADD_MERCH_MESSAGE
   * @description Allows the user to add a merch message to the archive.
   */
  ADD_MERCH_MESSAGE = 1 << 26,

  /**
   * PROPOSE_MERCH_MESSAGE
   * @description Allows the user to propose a merch message to be added to the archive.
   */
  PROPOSE_MERCH_MESSAGE = 1 << 27,

  /**
   * ACCEPT_MERCH_MESSAGE
   * @description Allows the user to accept a proposed merch message to be added to the archive.
   */
  ACCEPT_MERCH_MESSAGE = 1 << 28,

  /**
   * EDIT_MERCH_MESSAGE
   * @description Allows the user to edit a merch message in the archive.
   */
  EDIT_MERCH_MESSAGE = 1 << 29,

  /**
   * DELETE_MERCH_MESSAGE
   * @description Allows the user to delete a merch message from the archive.
   */
  DELETE_MERCH_MESSAGE = 1 << 30,

  /**
   * ADD_AWARD
   * @description Allows the user to add an award which can be given to other users.
   * @see PermissionsEnum.PROPOSE_AWARD
   */
  ADD_AWARD = 1 << 31,

  /**
   * PROPOSE_AWARD
   * @description Allows the user to propose an award to be added to the archive.
   * @see PermissionsEnum.ADD_AWARD
   */
  PROPOSE_AWARD = 1 << 32,

  /**
   * ACCEPT_AWARD
   * @description Allows the user to accept a proposed award to be added to the archive.
   */
  ACCEPT_AWARD = 1 << 33,

  /**
   * EDIT_AWARD
   * @description Allows the user to edit an award in the archive.
   */
  EDIT_AWARD = 1 << 34,

  /**
   * DELETE_AWARD
   * @description Allows the user to delete an award from the archive.
   */
  DELETE_AWARD = 1 << 35,

  /**
   * MODIFY_USER
   * @description Allows the user to modify another user's account.
   */
  MODIFY_USER = 1 << 36,

  /**
   * MODIFY_PERMISSIONS
   * @description Allows the user to modify another user's permissions.
   */
  MODIFY_PERMISSIONS = 1 << 37,

  /**
   * ADD_BANNER
   * @description Allows the user to add a banner to the archive.
   */
  ADD_BANNER = 1 << 38,

  /**
   * PROPOSE_BANNER
   * @description Allows the user to propose a banner to be added to the archive.
   */
  PROPOSE_BANNER = 1 << 39,

  /**
   * ACCEPT_BANNER
   * @description Allows the user to accept a proposed banner to be added to the archive.
   */
  ACCEPT_BANNER = 1 << 40,

  /**
   * EDIT_BANNER
   * @description Allows the user to edit a banner in the archive.
   */
  EDIT_BANNER = 1 << 41,

  /**
   * DELETE_BANNER
   * @description Allows the user to delete a banner from the archive.
   */
  DELETE_BANNER = 1 << 42,

  /**
   * ACCESS_BETA
   * @description Allows the user to access the beta version of the site.
   */
  ACCESS_BETA = 1 << 43,

  /**
   * ACCESS_ALPHA
   * @description Allows the user to access the alpha version of the site.
   */
  ACCESS_ALPHA = 1 << 44,

  /**
   * ACCESS_DEV
   * @description Allows the user to access the development version of the site.
   */
  ACCESS_DEV = 1 << 45,

  /**
   * ADMIN_PANEL
   * @description Allows the user to access the admin panel.
   */
  ADMIN_PANEL = 1 << 46,


  /**
   * USER
   * @description Equivalent to PermissionsEnum.NONE
   * @see PermissionsEnum.NONE
   */
  USER = PermissionsEnum.NONE,

  /**
   * EARLY_ACCESS_USER
   * @description Equivalent to PermissionsEnum.EARLY_ACCESS
   * @see PermissionsEnum.EARLY_ACCESS
   */
  EARLY_ACCESS_USER = PermissionsEnum.EARLY_ACCESS,

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
  ARCHIVIST = PermissionsEnum.PROPOSE_EPISODE
    | PermissionsEnum.PROPOSE_CAST
    | PermissionsEnum.PROPOSE_TOPIC
    | PermissionsEnum.PROPOSE_SPONSOR
    | PermissionsEnum.PROPOSE_MERCH
    | PermissionsEnum.PROPOSE_MERCH_MESSAGE,

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
  GILDED_ARCHIVIST = PermissionsEnum.ARCHIVIST
    | PermissionsEnum.ACCEPT_EPISODE
    | PermissionsEnum.ACCEPT_CAST
    | PermissionsEnum.ACCEPT_TOPIC
    | PermissionsEnum.ACCEPT_SPONSOR
    | PermissionsEnum.ACCEPT_MERCH
    | PermissionsEnum.ACCEPT_MERCH_MESSAGE,

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
  ADMIN = PermissionsEnum.GILDED_ARCHIVIST
    | PermissionsEnum.ADD_EPISODE
    | PermissionsEnum.EDIT_EPISODE
    | PermissionsEnum.DELETE_EPISODE
    | PermissionsEnum.ADD_CAST
    | PermissionsEnum.EDIT_CAST
    | PermissionsEnum.DELETE_CAST
    | PermissionsEnum.ADD_TOPIC
    | PermissionsEnum.EDIT_TOPIC
    | PermissionsEnum.DELETE_TOPIC
    | PermissionsEnum.ADD_SPONSOR
    | PermissionsEnum.EDIT_SPONSOR
    | PermissionsEnum.DELETE_SPONSOR
    | PermissionsEnum.ADD_MERCH
    | PermissionsEnum.EDIT_MERCH
    | PermissionsEnum.DELETE_MERCH
    | PermissionsEnum.ADD_MERCH_MESSAGE
    | PermissionsEnum.EDIT_MERCH_MESSAGE
    | PermissionsEnum.DELETE_MERCH_MESSAGE
    | PermissionsEnum.ADD_AWARD
    | PermissionsEnum.EDIT_AWARD
    | PermissionsEnum.DELETE_AWARD
    | PermissionsEnum.MODIFY_USER
    | PermissionsEnum.MODIFY_PERMISSIONS
    | PermissionsEnum.ADD_BANNER
    | PermissionsEnum.EDIT_BANNER
    | PermissionsEnum.DELETE_BANNER
    | PermissionsEnum.ACCESS_BETA
    | PermissionsEnum.ACCESS_ALPHA
    | PermissionsEnum.ACCESS_DEV
    | PermissionsEnum.ADMIN_PANEL,

  /**
   * OWNER
   * @description Rank given to only the owner of the site. This rank is not given to anyone else. It is the highest rank, and has all permissions enabled.
   * @see PermissionsEnum.ADMIN | PermissionsEnum.EARLY_ACCESS
   */
  OWNER = PermissionsEnum.ADMIN | PermissionsEnum.EARLY_ACCESS

}

export class Permissions {
  constructor(public permissions: number) {
  }

  get value() {
    return this.permissions;
  }

  set value(value: number) {
    this.permissions = value;
  }

  has(permission: PermissionsEnum) {
    return (this.permissions & permission) === permission;
  }

  add(permission: PermissionsEnum) {
    this.permissions |= permission;
  }

  remove(permission: PermissionsEnum) {
    this.permissions &= ~permission;
  }

  set(permission: PermissionsEnum, value: boolean) {
    if (value) {
      this.add(permission);
    } else {
      this.remove(permission);
    }
  }

  serialize() {
    return this.permissions;
  }
}

export const accounts = dataSchema.table('users_accounts', {
  id: serial('id').primaryKey().unique(),
  username: text('username').unique(),
  avatar: uuid('avatar').references(() => media.id),
  created: timestamp('created').defaultNow(),
  lastSeen: timestamp('last_seen'),
  permissionInt: bigint('permissions', {mode: "number"}).default(0),
})

export const accountsRelations = relations(accounts, ({one}) => ({
  avatar: one(media, {
    fields: [accounts.avatar],
    references: [media.id]
  })
}))