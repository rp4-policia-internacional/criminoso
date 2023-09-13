/*
  Warnings:

  - Added the required column `apelido` to the `Criminoso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caracteristicas` to the `Criminoso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foto` to the `Criminoso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `Criminoso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vistoPorUltimo` to the `Criminoso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Criminoso" ADD COLUMN     "apelido" VARCHAR NOT NULL,
ADD COLUMN     "caracteristicas" VARCHAR NOT NULL,
ADD COLUMN     "foto" VARCHAR NOT NULL,
ADD COLUMN     "genero" VARCHAR NOT NULL,
ADD COLUMN     "vistoPorUltimo" VARCHAR NOT NULL;
