/*
  Warnings:

  - You are about to drop the column `id_logist` on the `logist_stores` table. All the data in the column will be lost.
  - You are about to drop the column `id_store` on the `logist_stores` table. All the data in the column will be lost.
  - Added the required column `logist_id` to the `logist_stores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `store_id` to the `logist_stores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "logist_stores" DROP CONSTRAINT "logist_stores_id_logist_fkey";

-- DropForeignKey
ALTER TABLE "logist_stores" DROP CONSTRAINT "logist_stores_id_store_fkey";

-- AlterTable
ALTER TABLE "logist_stores" DROP COLUMN "id_logist",
DROP COLUMN "id_store",
ADD COLUMN     "logist_id" TEXT NOT NULL,
ADD COLUMN     "store_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "logist_stores" ADD CONSTRAINT "logist_stores_logist_id_fkey" FOREIGN KEY ("logist_id") REFERENCES "logists"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logist_stores" ADD CONSTRAINT "logist_stores_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
