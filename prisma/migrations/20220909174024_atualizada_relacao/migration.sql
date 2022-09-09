/*
  Warnings:

  - The primary key for the `store_stocks` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "store_stocks" DROP CONSTRAINT "store_stocks_pkey",
ADD CONSTRAINT "store_stocks_pkey" PRIMARY KEY ("store_id", "product_id");
