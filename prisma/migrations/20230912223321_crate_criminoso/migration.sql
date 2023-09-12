-- CreateTable
CREATE TABLE "Criminoso" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR NOT NULL,
    "sobrenome" VARCHAR NOT NULL,
    "paisOrigem" VARCHAR NOT NULL,
    "altura" DOUBLE PRECISION NOT NULL,
    "idade" INTEGER NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "status" VARCHAR NOT NULL,

    CONSTRAINT "Criminoso_pkey" PRIMARY KEY ("id")
);
