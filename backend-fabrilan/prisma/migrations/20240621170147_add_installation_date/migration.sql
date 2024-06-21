/*
  Warnings:

  - Added the required column `installationDate` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "installationDate" TIMESTAMP(3) NOT NULL;
