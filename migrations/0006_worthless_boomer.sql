ALTER TABLE "data"."lttstore_product_images"
    ALTER COLUMN "product_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "data"."lttstore_product_images"
    ALTER COLUMN "product_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "data"."lttstore_product_images"
    ALTER COLUMN "model_id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "data"."lttstore_product_images"
    ALTER COLUMN "model_id" DROP NOT NULL;