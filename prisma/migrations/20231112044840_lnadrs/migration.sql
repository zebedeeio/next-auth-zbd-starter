/*
  Warnings:

  - You are about to drop the column `lightingAddress` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "lightingAddress",
ADD COLUMN     "lightningAddress" TEXT;
