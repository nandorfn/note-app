/*
  Warnings:

  - You are about to drop the column `deadline` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "deadline",
DROP COLUMN "endTime",
DROP COLUMN "startTime",
DROP COLUMN "status";
