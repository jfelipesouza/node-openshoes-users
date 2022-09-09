/*
  Warnings:

  - The primary key for the `logist_stores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `logist_stores` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "logist_stores_id_key";

-- AlterTable
ALTER TABLE "logist_stores" DROP CONSTRAINT "logist_stores_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "logist_stores_pkey" PRIMARY KEY ("logist_id", "store_id");
