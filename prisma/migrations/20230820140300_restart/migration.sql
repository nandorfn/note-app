/*
  Warnings:

  - You are about to drop the column `color` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the `AuthProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trash` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AuthProfile" DROP CONSTRAINT "AuthProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_userId_fkey";

-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_userId_fkey";

-- DropForeignKey
ALTER TABLE "Trash" DROP CONSTRAINT "Trash_userId_fkey";

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "color",
DROP COLUMN "userId";

-- DropTable
DROP TABLE "AuthProfile";

-- DropTable
DROP TABLE "Todo";

-- DropTable
DROP TABLE "Trash";

-- DropTable
DROP TABLE "User";
