/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `logists` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cnpj]` on the table `logists` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `logists` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - The required column `code` was added to the `logists` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "logists" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "stores" (
    "logist_id" TEXT NOT NULL,
    "store_type" TEXT NOT NULL,
    "address" TEXT,
    "link" TEXT,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("logist_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stores_logist_id_key" ON "stores"("logist_id");

-- CreateIndex
CREATE UNIQUE INDEX "logists_id_key" ON "logists"("id");

-- CreateIndex
CREATE UNIQUE INDEX "logists_cnpj_key" ON "logists"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "logists_code_key" ON "logists"("code");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- AddForeignKey
ALTER TABLE "stores" ADD CONSTRAINT "stores_logist_id_fkey" FOREIGN KEY ("logist_id") REFERENCES "logists"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
