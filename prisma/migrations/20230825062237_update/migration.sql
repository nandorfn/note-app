/*
  Warnings:

  - You are about to drop the column `schedule` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `timeSlotId` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "schedule",
DROP COLUMN "timeSlotId";
