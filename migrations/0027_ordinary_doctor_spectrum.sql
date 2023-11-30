ALTER TABLE "data"."users_accounts"
    RENAME COLUMN "logged_in" TO "last_seen";--> statement-breakpoint
ALTER TABLE "data"."users_settings"
    ADD COLUMN "password" text;--> statement-breakpoint
ALTER TABLE "data"."users_settings"
    ADD COLUMN "vault" text;