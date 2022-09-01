/*
  Warnings:

  - You are about to drop the `stores` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `store_type` to the `logists` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "stores" DROP CONSTRAINT "stores_logist_id_fkey";

-- AlterTable
ALTER TABLE "logists" ADD COLUMN     "address" TEXT,
ADD COLUMN     "link" TEXT,
ADD COLUMN     "store_type" TEXT NOT NULL;

-- DropTable
DROP TABLE "stores";
