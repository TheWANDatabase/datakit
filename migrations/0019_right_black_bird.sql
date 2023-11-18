ALTER TABLE "management"."seedtube"
    ADD COLUMN "current_imminence" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."seedtube"
    ADD COLUMN "seconds_since_last_update" numeric NOT NULL;