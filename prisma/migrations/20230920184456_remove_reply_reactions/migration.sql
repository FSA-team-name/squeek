/*
  Warnings:

  - The primary key for the `Reaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Reaction` table. All the data in the column will be lost.
  - You are about to drop the column `replyId` on the `Reaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authorId,squeekId]` on the table `Reaction` will be added. If there are existing duplicate values, this will fail.
  - Made the column `squeekId` on table `Reaction` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Reaction" DROP CONSTRAINT "Reaction_replyId_fkey";

-- DropForeignKey
ALTER TABLE "Reaction" DROP CONSTRAINT "Reaction_squeekId_fkey";

-- DropIndex
DROP INDEX "Reaction_authorId_squeekId_replyId_key";

-- AlterTable
ALTER TABLE "Reaction" DROP CONSTRAINT "Reaction_pkey",
DROP COLUMN "id",
DROP COLUMN "replyId",
ALTER COLUMN "squeekId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Reaction_authorId_squeekId_key" ON "Reaction"("authorId", "squeekId");

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_squeekId_fkey" FOREIGN KEY ("squeekId") REFERENCES "Squeek"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
