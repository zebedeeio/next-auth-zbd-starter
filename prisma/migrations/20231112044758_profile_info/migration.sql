-- AlterTable
ALTER TABLE "User" ADD COLUMN     "publicBio" TEXT,
ADD COLUMN     "publicStaticCharge" TEXT,
ALTER COLUMN "isVerified" DROP NOT NULL,
ALTER COLUMN "lightingAddress" DROP NOT NULL;
