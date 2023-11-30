ALTER TABLE "data"."users_accounts"
    ADD COLUMN "permissions" bigint DEFAULT 0;--> statement-breakpoint
ALTER TABLE "data"."users_settings"
    DROP COLUMN IF EXISTS "vault";