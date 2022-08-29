/*
  Warnings:

  - The primary key for the `logists` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_logist` on the `logists` table. All the data in the column will be lost.
  - You are about to drop the `users_logists` table. If the table is not empty, all the data it contains will be lost.
  - The required column `id` was added to the `logists` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `update_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "logists" DROP CONSTRAINT "logists_pkey",
DROP COLUMN "id_logist",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "logists_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "users_logists";

-- CreateTable
CREATE TABLE "users_accounts" (
    "id_user" TEXT NOT NULL,
    "id_logist" TEXT NOT NULL,

    CONSTRAINT "users_accounts_pkey" PRIMARY KEY ("id_user","id_logist")
);

-- AddForeignKey
ALTER TABLE "users_accounts" ADD CONSTRAINT "users_accounts_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_accounts" ADD CONSTRAINT "users_accounts_id_logist_fkey" FOREIGN KEY ("id_logist") REFERENCES "logists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
