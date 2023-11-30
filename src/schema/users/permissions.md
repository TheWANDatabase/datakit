# Permissions

## Overview

Permissions are used to control access to resources. They are defined in the `permissions` column of the `accounts`
table.

## Permissions

The "Granted By" column indicates which rank(s) are required to use the permission. For example, the `ADMIN` rank is
required to use the `ADD_EPISODE` permission.

Available Ranks are:

- `USER` (This rank is assigned to all users by default.)
- `ARCHIVIST` (This rank is assigned to users who have been awarded the `ARCHIVIST` award. It is only available to
  trusted users.)
- `GILDED ARCHIVIST` (This rank is assigned to users who have been awarded the `GILDED ARCHIVIST` award. It is only
  available to trusted users.)
- `ADMIN`  (This rank is assigned only to the site administrators. It is only available to trusted users.)
- `SYSTEM` (This rank is not assigned to any user, but is used internally by the system.)

## Permission List

| Permission            | Description                                                                    |                Granted By                |
|:----------------------|:-------------------------------------------------------------------------------|:----------------------------------------:|
| NONE                  | Allows the user to do as if they were logged out of the site entirely.         |                  `USER`                  |
| EARLY_ACCESS          | Allows the user to choose which development branch they'd like to be served.   |                 `SYSTEM`                 |
| ADD_EPISODE           | Allows the user to add an episode to the archive.                              |                 `ADMIN`                  |
| PROPOSE_EPISODE       | Allows the user to propose an episode to be added to the archive.              | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| ACCEPT_EPISODE        | Allows the user to accept a proposed episode to be added to the archive.       | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| EDIT_EPISODE          | Allows the user to edit an episode in the archive.                             | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| DELETE_EPISODE        | Allows the user to delete an episode from the archive.                         |                 `ADMIN`                  |
| ADD_CAST              | Allows the user to add a cast member to the archive.                           |                 `ADMIN`                  |
| PROPOSE_CAST          | Allows the user to propose a cast member to be added to the archive.           | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| ACCEPT_CAST           | Allows the user to accept a proposed cast member to be added to the archive.   | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| EDIT_CAST             | Allows the user to edit a cast member in the archive.                          | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| DELETE_CAST           | Allows the user to delete a cast member from the archive.                      |                 `ADMIN`                  |
| ADD_TOPIC             | Allows the user to add a topic to the archive.                                 |                 `ADMIN`                  |
| PROPOSE_TOPIC         | Allows the user to propose a topic to be added to the archive.                 | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| ACCEPT_TOPIC          | Allows the user to accept a proposed topic to be added to the archive.         | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| EDIT_TOPIC            | Allows the user to edit a topic in the archive.                                | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| DELETE_TOPIC          | Allows the user to delete a topic from the archive.                            |                 `ADMIN`                  |
| ADD_SPONSOR           | Allows the user to add a sponsor to the archive.                               |                 `ADMIN`                  |
| PROPOSE_SPONSOR       | Allows the user to propose a sponsor to be added to the archive.               | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| ACCEPT_SPONSOR        | Allows the user to accept a proposed sponsor to be added to the archive.       | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| EDIT_SPONSOR          | Allows the user to edit a sponsor in the archive.                              | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| DELETE_SPONSOR        | Allows the user to delete a sponsor from the archive.                          |                 `ADMIN`                  |
| ADD_MERCH             | Allows the user to add a merch item to the archive.                            |                 `ADMIN`                  |
| PROPOSE_MERCH         | Allows the user to propose a merch item to be added to the archive.            | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| ACCEPT_MERCH          | Allows the user to accept a proposed merch item to be added to the archive.    | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| EDIT_MERCH            | Allows the user to edit a merch item in the archive.                           | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| DELETE_MERCH          | Allows the user to delete a merch item from the archive.                       |                 `ADMIN`                  |
| ADD_MERCH_MESSAGE     | Allows the user to add a merch message to the archive.                         |                 `ADMIN`                  |
| PROPOSE_MERCH_MESSAGE | Allows the user to propose a merch message to be added to the archive.         | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| ACCEPT_MERCH_MESSAGE  | Allows the user to accept a proposed merch message to be added to the archive. | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| EDIT_MERCH_MESSAGE    | Allows the user to edit a merch message in the archive.                        | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| DELETE_MERCH_MESSAGE  | Allows the user to delete a merch message from the archive.                    |                 `ADMIN`                  |
| ADD_AWARD             | Allows the user to add an award which can be given to other users.             |                 `ADMIN`                  |
| PROPOSE_AWARD         | Allows the user to propose an award to be added to the archive.                | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| ACCEPT_AWARD          | Allows the user to accept a proposed award to be added to the archive.         | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| EDIT_AWARD            | Allows the user to edit an award in the archive.                               | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| DELETE_AWARD          | Allows the user to delete an award from the archive.                           |                 `ADMIN`                  |
| MODIFY_USER           | Allows the user to modify another user's account.                              |                 `ADMIN`                  |
| MODIFY_PERMISSIONS    | Allows the user to modify another user's permissions.                          |                 `ADMIN`                  |
| ADD_BANNER            | Allows the user to add a banner to the archive.                                |                 `ADMIN`                  |
| PROPOSE_BANNER        | Allows the user to propose a banner to be added to the archive.                | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| ACCEPT_BANNER         | Allows the user to accept a proposed banner to be added to the archive.        | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| EDIT_BANNER           | Allows the user to edit a banner in the archive.                               | `ADMIN`, `ARCHIVIST`, `GILDED ARCHIVIST` |
| DELETE_BANNER         | Allows the user to delete a banner from the archive.                           |                 `ADMIN`                  |
| ACCESS_BETA           | Allows the user to access the beta version of the site.                        |            `SYSTEM`, `ADMIN`             |
| ACCESS_ALPHA          | Allows the user to access the alpha version of the site.                       |            `SYSTEM`, `ADMIN`             |
| ACCESS_DEV            | Allows the user to access the development version of the site.                 |            `SYSTEM`, `ADMIN`             |
| ADMIN_PANEL           | Allows the user to access the admin panel.                                     |                 `ADMIN`                  |
