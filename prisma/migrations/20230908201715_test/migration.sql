/*
  Warnings:

  - You are about to drop the column `replyId` on the `Reaction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reaction" DROP CONSTRAINT "Reaction_replyId_fkey";

-- AlterTable
ALTER TABLE "Reaction" DROP COLUMN "replyId",
ALTER COLUMN "like" SET DEFAULT false,
ALTER COLUMN "dislike" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Squeek" ALTER COLUMN "resqueekCount" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
