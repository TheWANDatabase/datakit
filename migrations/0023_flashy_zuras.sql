ALTER TABLE "management"."seedtube"
    ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    ALTER COLUMN "thumbnail" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    ADD COLUMN "live" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    ADD COLUMN "wan" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    ADD COLUMN "imminence" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    ADD COLUMN "text_imminence" text NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    DROP COLUMN IF EXISTS "current_imminence";--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    DROP COLUMN IF EXISTS "current_text_imminence";--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    DROP COLUMN IF EXISTS "seconds_since_last_update";--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    DROP COLUMN IF EXISTS "sponsors";