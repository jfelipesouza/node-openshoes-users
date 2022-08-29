/*
  Warnings:

  - You are about to drop the `logists` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users_accounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users_accounts" DROP CONSTRAINT "users_accounts_id_logist_fkey";

-- DropForeignKey
ALTER TABLE "users_accounts" DROP CONSTRAINT "users_accounts_id_user_fkey";

-- DropTable
DROP TABLE "logists";

-- DropTable
DROP TABLE "users_accounts";
