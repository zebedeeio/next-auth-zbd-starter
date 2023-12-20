/*
  Warnings:

  - You are about to drop the column `creatorId` on the `Contact` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_creatorId_fkey";

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "creatorId";
