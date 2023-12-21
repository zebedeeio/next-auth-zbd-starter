/*
  Warnings:

  - Added the required column `lightingAddress` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `isVerified` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lightingAddress" BOOLEAN NOT NULL,
ALTER COLUMN "isVerified" SET NOT NULL;
