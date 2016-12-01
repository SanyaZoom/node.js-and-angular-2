create table BSSERVINT (
   NSERVINT_ID          INT8                 not null,
   NSERVT               INT                  not null,
   NCLIENT              INT8                 not null,
   DBEGIN               TIMESTAMP            not null,
   DEND                 TIMESTAMP            null,
   NVALUE               NUMERIC(36,14)       not null,
   VSTATE               VARCHAR(30)          null,
   NBSPER               INT4                 NOT NULL,
   NVALUEOUT            NUMERIC(36,14)       NOT NULL,
   constraint PK_BSSERVINT primary key (NSERVINT_ID)
);
