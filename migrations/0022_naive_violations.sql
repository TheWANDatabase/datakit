ALTER TABLE "management"."logs"
    ADD COLUMN "time" timestamp DEFAULT now() NOT NULL;