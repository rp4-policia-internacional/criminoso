-- CreateTable
CREATE TABLE "Organizacao" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR NOT NULL,
    "descricao" VARCHAR NOT NULL,
    "lider" VARCHAR NOT NULL,
    "sigla" VARCHAR NOT NULL,

    CONSTRAINT "Organizacao_pkey" PRIMARY KEY ("id")
);
