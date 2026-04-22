-- CreateTable
CREATE TABLE "user" (
    "userid" TEXT NOT NULL,
    "username" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_userid_key" ON "user"("userid");
