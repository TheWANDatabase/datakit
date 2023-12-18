ALTER TABLE "data"."topics_changes"
    ALTER COLUMN "id" SET DEFAULT gen_random_uuid();