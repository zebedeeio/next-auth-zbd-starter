/*
  Warnings:

  - A unique constraint covering the columns `[teamId,hackathonId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Project_teamId_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Project_teamId_hackathonId_key" ON "Project"("teamId", "hackathonId");
