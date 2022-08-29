/*
  Warnings:

  - Added the required column `update_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "users_accounts" (
    "id_user" TEXT NOT NULL,
    "id_logist" TEXT NOT NULL,

    CONSTRAINT "users_accounts_pkey" PRIMARY KEY ("id_user","id_logist")
);

-- CreateTable
CREATE TABLE "logists" (
    "id" TEXT NOT NULL,
    "store_name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,

    CONSTRAINT "logists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "logists_store_name_key" ON "logists"("store_name");

-- AddForeignKey
ALTER TABLE "users_accounts" ADD CONSTRAINT "users_accounts_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_accounts" ADD CONSTRAINT "users_accounts_id_logist_fkey" FOREIGN KEY ("id_logist") REFERENCES "logists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
