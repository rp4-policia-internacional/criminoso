/*
  Warnings:

  - You are about to drop the column `paisOrigem` on the `Criminoso` table. All the data in the column will be lost.
  - You are about to drop the column `vistoPorUltimo` on the `Criminoso` table. All the data in the column will be lost.
  - You are about to drop the `OrgCriminoso` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_paisOrigem` to the `Criminoso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_paisVistoPorUltimo` to the `Criminoso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Criminoso" DROP COLUMN "paisOrigem",
DROP COLUMN "vistoPorUltimo",
ADD COLUMN     "id_paisOrigem" VARCHAR NOT NULL,
ADD COLUMN     "id_paisVistoPorUltimo" VARCHAR NOT NULL;

-- DropTable
DROP TABLE "OrgCriminoso";
