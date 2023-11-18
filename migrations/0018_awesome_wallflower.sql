ALTER TABLE "management"."seedtube"
    DROP COLUMN IF EXISTS "current_imminence";--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    DROP COLUMN IF EXISTS "seconds_since_last_update";