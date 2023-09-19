-- CreateTable
CREATE TABLE "OrgCriminoso" (
    "id" TEXT NOT NULL,
    "grupoID" VARCHAR NOT NULL,
    "criminosoID" VARCHAR NOT NULL,
    "funcaoCriminoso" VARCHAR NOT NULL,

    CONSTRAINT "OrgCriminoso_pkey" PRIMARY KEY ("id")
);
