ALTER TABLE "management"."logs"
    ADD COLUMN "id" bigint NOT NULL;--> statement-breakpoint
ALTER TABLE "management"."logs"
    ADD CONSTRAINT "logs_id_unique" UNIQUE ("id");