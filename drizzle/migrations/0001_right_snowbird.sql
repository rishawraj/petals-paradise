ALTER TABLE "user" ALTER COLUMN "username" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "password_hash" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "first_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "last_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "phone_number" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "updatedAt" timestamp DEFAULT now() NOT NULL;