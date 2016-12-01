create table BSSERVROLLBACK (
   NSERVRB_ID           INT8                 not null,
   NSERV                INT8                 not null,
   NSCARD               INT8                 not null,
   DINPUT               TIMESTAMP            not null,
   VSTATE               VARCHAR(2)           not null,
   NBSPER               INT4                 null,
   NSUM                 NUMERIC(36,14)       null,
   NCPCTRATE            NUMERIC(36,14)       null,
   NCPCTSERV            NUMERIC(36,14)       null,
   NCPCTSERVOUT         NUMERIC(36,14)       null,
   NCPCTRATEOUT         NUMERIC(36,14)       null,
   constraint PK_BSSERVROLLBACK primary key (NSERVRB_ID)
);
