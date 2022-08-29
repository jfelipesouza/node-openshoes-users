/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_logists" (
    "id" INTEGER NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_logist" TEXT NOT NULL,

    CONSTRAINT "users_logists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logists" (
    "id_logist" TEXT NOT NULL,
    "store_name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,

    CONSTRAINT "logists_pkey" PRIMARY KEY ("id_logist")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "logists_store_name_key" ON "logists"("store_name");
