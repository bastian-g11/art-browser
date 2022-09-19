/*
  Warnings:

  - You are about to drop the column `link` on the `Artwork` table. All the data in the column will be lost.
  - Added the required column `img_link` to the `Artwork` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artwork" DROP COLUMN "link",
ADD COLUMN     "img_link" TEXT NOT NULL;
