"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.accountsRelations = exports.accounts = exports.Permissions = exports.PermissionsEnum = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const media_1 = require("../media");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../schema");
const settings_1 = require("./settings");
/**
 * PermissionsEnum
 * @enum {number}
 * @export
 * @readonly
 * @description PermissionsEnum represents the permissions that a user can have.
 * @example PermissionsEnum.EARLY_ACCESS_USER | PermissionsEnum.ADD_EPISODE
 */
var PermissionsEnum;
(function (PermissionsEnum) {
    /**
     * NONE
     * @description Allows the user to do as if they were logged out of the site entirely.
     */
    PermissionsEnum[PermissionsEnum["NONE"] = 0] = "NONE";
    /**
     * EARLY_ACCESS
     * @description Allows the user to choose which development branch they'd like to be served.
     */
    PermissionsEnum[PermissionsEnum["EARLY_ACCESS"] = 1] = "EARLY_ACCESS";
    /**
     * ADD_EPISODE
     * @description Allows the user to add an episode to the archive.
     * @see PermissionsEnum.PROPOSE_EPISODE
     */
    PermissionsEnum[PermissionsEnum["ADD_EPISODE"] = 2] = "ADD_EPISODE";
    /**
     * PROPOSE_EPISODE
     * @description Allows the user to propose an episode to be added to the archive.
     * @see PermissionsEnum.ADD_EPISODE
     */
    PermissionsEnum[PermissionsEnum["PROPOSE_EPISODE"] = 4] = "PROPOSE_EPISODE";
    /**
     * ACCEPT_EPISODE
     * @description Allows the user to accept a proposed episode to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["ACCEPT_EPISODE"] = 8] = "ACCEPT_EPISODE";
    /**
     * EDIT_EPISODE
     * @description Allows the user to edit an episode in the archive.
     */
    PermissionsEnum[PermissionsEnum["EDIT_EPISODE"] = 16] = "EDIT_EPISODE";
    /**
     * DELETE_EPISODE
     * @description Allows the user to delete an episode from the archive.
     */
    PermissionsEnum[PermissionsEnum["DELETE_EPISODE"] = 32] = "DELETE_EPISODE";
    /**
     * ADD_CAST
     * @description Allows the user to add a cast member to the archive.
     * @see PermissionsEnum.PROPOSE_CAST
     */
    PermissionsEnum[PermissionsEnum["ADD_CAST"] = 64] = "ADD_CAST";
    /**
     * PROPOSE_CAST
     * @description Allows the user to propose a cast member to be added to the archive.
     * @see PermissionsEnum.ADD_CAST
     */
    PermissionsEnum[PermissionsEnum["PROPOSE_CAST"] = 128] = "PROPOSE_CAST";
    /**
     * ACCEPT_CAST
     * @description Allows the user to accept a proposed cast member to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["ACCEPT_CAST"] = 256] = "ACCEPT_CAST";
    /**
     * EDIT_CAST
     * @description Allows the user to edit a cast member in the archive.
     */
    PermissionsEnum[PermissionsEnum["EDIT_CAST"] = 512] = "EDIT_CAST";
    /**
     * DELETE_CAST
     * @description Allows the user to delete a cast member from the archive.
     */
    PermissionsEnum[PermissionsEnum["DELETE_CAST"] = 1024] = "DELETE_CAST";
    /**
     * ADD_TOPIC
     * @description Allows the user to add a topic to the archive.
     * @see PermissionsEnum.PROPOSE_TOPIC
     */
    PermissionsEnum[PermissionsEnum["ADD_TOPIC"] = 2048] = "ADD_TOPIC";
    /**
     * PROPOSE_TOPIC
     * @description Allows the user to propose a topic to be added to the archive.
     * @see PermissionsEnum.ADD_TOPIC
     */
    PermissionsEnum[PermissionsEnum["PROPOSE_TOPIC"] = 4096] = "PROPOSE_TOPIC";
    /**
     * ACCEPT_TOPIC
     * @description Allows the user to accept a proposed topic to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["ACCEPT_TOPIC"] = 8192] = "ACCEPT_TOPIC";
    /**
     * EDIT_TOPIC
     * @description Allows the user to edit a topic in the archive.
     */
    PermissionsEnum[PermissionsEnum["EDIT_TOPIC"] = 16384] = "EDIT_TOPIC";
    /**
     * DELETE_TOPIC
     * @description Allows the user to delete a topic from the archive.
     */
    PermissionsEnum[PermissionsEnum["DELETE_TOPIC"] = 32768] = "DELETE_TOPIC";
    /**
     * ADD_SPONSOR
     * @description Allows the user to add a sponsor to the archive.
     * @see PermissionsEnum.PROPOSE_SPONSOR
     */
    PermissionsEnum[PermissionsEnum["ADD_SPONSOR"] = 65536] = "ADD_SPONSOR";
    /**
     * PROPOSE_SPONSOR
     * @description Allows the user to propose a sponsor to be added to the archive.
     * @see PermissionsEnum.ADD_SPONSOR
     */
    PermissionsEnum[PermissionsEnum["PROPOSE_SPONSOR"] = 131072] = "PROPOSE_SPONSOR";
    /**
     * ACCEPT_SPONSOR
     * @description Allows the user to accept a proposed sponsor to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["ACCEPT_SPONSOR"] = 262144] = "ACCEPT_SPONSOR";
    /**
     * EDIT_SPONSOR
     * @description Allows the user to edit a sponsor in the archive.
     */
    PermissionsEnum[PermissionsEnum["EDIT_SPONSOR"] = 524288] = "EDIT_SPONSOR";
    /**
     * DELETE_SPONSOR
     * @description Allows the user to delete a sponsor from the archive.
     */
    PermissionsEnum[PermissionsEnum["DELETE_SPONSOR"] = 1048576] = "DELETE_SPONSOR";
    /**
     * ADD_MERCH
     * @description Allows the user to add a merch item to the archive.
     */
    PermissionsEnum[PermissionsEnum["ADD_MERCH"] = 2097152] = "ADD_MERCH";
    /**
     * PROPOSE_MERCH
     * @description Allows the user to propose a merch item to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["PROPOSE_MERCH"] = 4194304] = "PROPOSE_MERCH";
    /**
     * ACCEPT_MERCH
     * @description Allows the user to accept a proposed merch item to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["ACCEPT_MERCH"] = 8388608] = "ACCEPT_MERCH";
    /**
     * EDIT_MERCH
     * @description Allows the user to edit a merch item in the archive.
     */
    PermissionsEnum[PermissionsEnum["EDIT_MERCH"] = 16777216] = "EDIT_MERCH";
    /**
     * DELETE_MERCH
     * @description Allows the user to delete a merch item from the archive.
     */
    PermissionsEnum[PermissionsEnum["DELETE_MERCH"] = 33554432] = "DELETE_MERCH";
    /**
     * ADD_MERCH_MESSAGE
     * @description Allows the user to add a merch message to the archive.
     */
    PermissionsEnum[PermissionsEnum["ADD_MERCH_MESSAGE"] = 67108864] = "ADD_MERCH_MESSAGE";
    /**
     * PROPOSE_MERCH_MESSAGE
     * @description Allows the user to propose a merch message to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["PROPOSE_MERCH_MESSAGE"] = 134217728] = "PROPOSE_MERCH_MESSAGE";
    /**
     * ACCEPT_MERCH_MESSAGE
     * @description Allows the user to accept a proposed merch message to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["ACCEPT_MERCH_MESSAGE"] = 268435456] = "ACCEPT_MERCH_MESSAGE";
    /**
     * EDIT_MERCH_MESSAGE
     * @description Allows the user to edit a merch message in the archive.
     */
    PermissionsEnum[PermissionsEnum["EDIT_MERCH_MESSAGE"] = 536870912] = "EDIT_MERCH_MESSAGE";
    /**
     * DELETE_MERCH_MESSAGE
     * @description Allows the user to delete a merch message from the archive.
     */
    PermissionsEnum[PermissionsEnum["DELETE_MERCH_MESSAGE"] = 1073741824] = "DELETE_MERCH_MESSAGE";
    /**
     * ADD_AWARD
     * @description Allows the user to add an award which can be given to other users.
     * @see PermissionsEnum.PROPOSE_AWARD
     */
    PermissionsEnum[PermissionsEnum["ADD_AWARD"] = -2147483648] = "ADD_AWARD";
    /**
     * PROPOSE_AWARD
     * @description Allows the user to propose an award to be added to the archive.
     * @see PermissionsEnum.ADD_AWARD
     */
    PermissionsEnum[PermissionsEnum["PROPOSE_AWARD"] = 1] = "PROPOSE_AWARD";
    /**
     * ACCEPT_AWARD
     * @description Allows the user to accept a proposed award to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["ACCEPT_AWARD"] = 2] = "ACCEPT_AWARD";
    /**
     * EDIT_AWARD
     * @description Allows the user to edit an award in the archive.
     */
    PermissionsEnum[PermissionsEnum["EDIT_AWARD"] = 4] = "EDIT_AWARD";
    /**
     * DELETE_AWARD
     * @description Allows the user to delete an award from the archive.
     */
    PermissionsEnum[PermissionsEnum["DELETE_AWARD"] = 8] = "DELETE_AWARD";
    /**
     * MODIFY_USER
     * @description Allows the user to modify another user's account.
     */
    PermissionsEnum[PermissionsEnum["MODIFY_USER"] = 16] = "MODIFY_USER";
    /**
     * MODIFY_PERMISSIONS
     * @description Allows the user to modify another user's permissions.
     */
    PermissionsEnum[PermissionsEnum["MODIFY_PERMISSIONS"] = 32] = "MODIFY_PERMISSIONS";
    /**
     * ADD_BANNER
     * @description Allows the user to add a banner to the archive.
     */
    PermissionsEnum[PermissionsEnum["ADD_BANNER"] = 64] = "ADD_BANNER";
    /**
     * PROPOSE_BANNER
     * @description Allows the user to propose a banner to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["PROPOSE_BANNER"] = 128] = "PROPOSE_BANNER";
    /**
     * ACCEPT_BANNER
     * @description Allows the user to accept a proposed banner to be added to the archive.
     */
    PermissionsEnum[PermissionsEnum["ACCEPT_BANNER"] = 256] = "ACCEPT_BANNER";
    /**
     * EDIT_BANNER
     * @description Allows the user to edit a banner in the archive.
     */
    PermissionsEnum[PermissionsEnum["EDIT_BANNER"] = 512] = "EDIT_BANNER";
    /**
     * DELETE_BANNER
     * @description Allows the user to delete a banner from the archive.
     */
    PermissionsEnum[PermissionsEnum["DELETE_BANNER"] = 1024] = "DELETE_BANNER";
    /**
     * ACCESS_BETA
     * @description Allows the user to access the beta version of the site.
     */
    PermissionsEnum[PermissionsEnum["ACCESS_BETA"] = 2048] = "ACCESS_BETA";
    /**
     * ACCESS_ALPHA
     * @description Allows the user to access the alpha version of the site.
     */
    PermissionsEnum[PermissionsEnum["ACCESS_ALPHA"] = 4096] = "ACCESS_ALPHA";
    /**
     * ACCESS_DEV
     * @description Allows the user to access the development version of the site.
     */
    PermissionsEnum[PermissionsEnum["ACCESS_DEV"] = 8192] = "ACCESS_DEV";
    /**
     * ADMIN_PANEL
     * @description Allows the user to access the admin panel.
     */
    PermissionsEnum[PermissionsEnum["ADMIN_PANEL"] = 16384] = "ADMIN_PANEL";
    /**
     * USER
     * @description Equivalent to PermissionsEnum.NONE
     * @see PermissionsEnum.NONE
     */
    PermissionsEnum[PermissionsEnum["USER"] = 0] = "USER";
    /**
     * EARLY_ACCESS_USER
     * @description Equivalent to PermissionsEnum.EARLY_ACCESS
     * @see PermissionsEnum.EARLY_ACCESS
     */
    PermissionsEnum[PermissionsEnum["EARLY_ACCESS_USER"] = 1] = "EARLY_ACCESS_USER";
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
    PermissionsEnum[PermissionsEnum["ARCHIVIST"] = 138547332] = "ARCHIVIST";
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
    PermissionsEnum[PermissionsEnum["GILDED_ARCHIVIST"] = 415641996] = "GILDED_ARCHIVIST";
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
    PermissionsEnum[PermissionsEnum["ADMIN"] = -2] = "ADMIN";
    /**
     * OWNER
     * @description Rank given to only the owner of the site. This rank is not given to anyone else. It is the highest rank, and has all permissions enabled.
     * @see PermissionsEnum.ADMIN | PermissionsEnum.EARLY_ACCESS
     */
    PermissionsEnum[PermissionsEnum["OWNER"] = -1] = "OWNER";
})(PermissionsEnum || (exports.PermissionsEnum = PermissionsEnum = {}));

class Permissions {
    permissions;

    constructor(permissions) {
        this.permissions = permissions;
    }

    get value() {
        return this.permissions;
    }

    set value(value) {
        this.permissions = value;
    }

    has(permission) {
        return (this.permissions & permission) === permission;
    }

    add(permission) {
        this.permissions |= permission;
    }

    remove(permission) {
        this.permissions &= ~permission;
    }

    set(permission, value) {
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

exports.Permissions = Permissions;
exports.accounts = schema_1.dataSchema.table('users_accounts', {
    id: (0, pg_core_1.uuid)('uuid').primaryKey().unique().references(() => settings_1.userSettings.uid),
    displayName: (0, pg_core_1.text)('display_name').unique(),
    avatar: (0, pg_core_1.uuid)('avatar').references(() => media_1.media.id),
    created: (0, pg_core_1.timestamp)('created').defaultNow(),
    lastSeen: (0, pg_core_1.timestamp)('last_seen'),
    permissionInt: (0, pg_core_1.bigint)('permissions', {mode: "number"}).default(0),
});
exports.accountsRelations = (0, drizzle_orm_1.relations)(exports.accounts, ({one}) => ({
    avatar: one(media_1.media, {
        fields: [exports.accounts.avatar],
        references: [media_1.media.id]
    })
}));
