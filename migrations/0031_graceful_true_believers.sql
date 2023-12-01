ALTER TABLE "data"."users_accounts"
    RENAME COLUMN "username" TO "display_name";--> statement-breakpoint
ALTER TABLE "data"."users_settings"
    RENAME COLUMN "full_name" TO "username";--> statement-breakpoint
ALTER TABLE "data"."users_accounts"
    DROP CONSTRAINT "users_accounts_username_unique";--> statement-breakpoint
ALTER TABLE "data"."users_accounts"
    ADD CONSTRAINT "users_accounts_display_name_unique" UNIQUE ("display_name");