/*
  Warnings:

  - A unique constraint covering the columns `[authorId,squeekId,replyId]` on the table `Reaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Reaction_authorId_squeekId_replyId_key" ON "Reaction"("authorId", "squeekId", "replyId");
