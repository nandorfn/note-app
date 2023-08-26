/*
  Warnings:

  - You are about to drop the `TaskTimeSlot` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `endTime` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_timeSlotId_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "TaskTimeSlot";
