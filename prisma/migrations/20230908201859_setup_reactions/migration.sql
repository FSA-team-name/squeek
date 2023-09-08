-- DropForeignKey
ALTER TABLE "Reaction" DROP CONSTRAINT "Reaction_squeekId_fkey";

-- AlterTable
ALTER TABLE "Reaction" ADD COLUMN     "replyId" INTEGER,
ALTER COLUMN "squeekId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_squeekId_fkey" FOREIGN KEY ("squeekId") REFERENCES "Squeek"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Reply"("id") ON DELETE SET NULL ON UPDATE CASCADE;
