/*
  Warnings:

  - A unique constraint covering the columns `[api_id]` on the table `Artwork` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `api_id` to the `Artwork` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artwork" ADD COLUMN     "api_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Artwork_api_id_key" ON "Artwork"("api_id");
