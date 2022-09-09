-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_accounts" (
    "id_user" TEXT NOT NULL,
    "id_logist" TEXT NOT NULL,

    CONSTRAINT "users_accounts_pkey" PRIMARY KEY ("id_user","id_logist")
);

-- CreateTable
CREATE TABLE "logists" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "logists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logist_stores" (
    "id" TEXT NOT NULL,
    "id_store" TEXT NOT NULL,
    "id_logist" TEXT NOT NULL,

    CONSTRAINT "logist_stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" TEXT NOT NULL,
    "store_name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "store_type" TEXT NOT NULL,
    "address" TEXT,
    "link" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_stocks" (
    "store_id" TEXT NOT NULL,
    "product_id" BIGINT NOT NULL,

    CONSTRAINT "store_stocks_pkey" PRIMARY KEY ("store_id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" BIGSERIAL NOT NULL,
    "type" VARCHAR(50) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" BIGSERIAL NOT NULL,
    "available" BOOLEAN,
    "created_at" TIMESTAMP(6),
    "image" VARCHAR(255) NOT NULL,
    "logist_code" VARCHAR(255) NOT NULL,
    "model" VARCHAR(50) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "size" BYTEA NOT NULL,
    "update_at" TIMESTAMP(6),
    "category_id" BIGINT,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "logists_id_key" ON "logists"("id");

-- CreateIndex
CREATE UNIQUE INDEX "logists_code_key" ON "logists"("code");

-- CreateIndex
CREATE UNIQUE INDEX "logist_stores_id_key" ON "logist_stores"("id");

-- CreateIndex
CREATE UNIQUE INDEX "stores_id_key" ON "stores"("id");

-- CreateIndex
CREATE UNIQUE INDEX "stores_store_name_key" ON "stores"("store_name");

-- CreateIndex
CREATE UNIQUE INDEX "stores_cnpj_key" ON "stores"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "store_stocks_product_id_key" ON "store_stocks"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "uk_c2491gxyu6bsjw346i1fgojqf" ON "category"("type");

-- CreateIndex
CREATE UNIQUE INDEX "product_id_key" ON "product"("id");

-- AddForeignKey
ALTER TABLE "users_accounts" ADD CONSTRAINT "users_accounts_id_logist_fkey" FOREIGN KEY ("id_logist") REFERENCES "logists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_accounts" ADD CONSTRAINT "users_accounts_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logist_stores" ADD CONSTRAINT "logist_stores_id_logist_fkey" FOREIGN KEY ("id_logist") REFERENCES "logists"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logist_stores" ADD CONSTRAINT "logist_stores_id_store_fkey" FOREIGN KEY ("id_store") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_stocks" ADD CONSTRAINT "store_stocks_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_stocks" ADD CONSTRAINT "store_stocks_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "fk1mtsbur82frn64de7balymq9s" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
