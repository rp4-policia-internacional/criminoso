-- CreateTable
CREATE TABLE "HistoricoCriminoso" (
    "idHistorico" TEXT NOT NULL,
    "id" VARCHAR NOT NULL,
    "nomeCompleto" VARCHAR NOT NULL,
    "altura" DOUBLE PRECISION NOT NULL,
    "idade" INTEGER NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "status" VARCHAR NOT NULL,
    "apelido" VARCHAR NOT NULL,
    "caracteristicas" VARCHAR NOT NULL,
    "foto" VARCHAR NOT NULL,
    "genero" VARCHAR NOT NULL,
    "id_paisOrigem" VARCHAR NOT NULL,
    "id_paisVistoPorUltimo" VARCHAR NOT NULL,
    "id_organizacao" VARCHAR NOT NULL,
    "dataAtualizacao" DATE NOT NULL,

    CONSTRAINT "HistoricoCriminoso_pkey" PRIMARY KEY ("idHistorico")
);
