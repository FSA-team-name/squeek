-- CreateTable
CREATE TABLE "Favorite" (
    "authorId" INTEGER NOT NULL,
    "squeekId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_authorId_squeekId_key" ON "Favorite"("authorId", "squeekId");

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_squeekId_fkey" FOREIGN KEY ("squeekId") REFERENCES "Squeek"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
