create table bssaldocard (
   NSCARD_ID            INT8                 not null       primary key,
   NBSPER               INT4                 not null,
   NCLIENT              INT8                 not null,
   NTSALDO              INT4                 not null,
   NKEY                 INT4                 null,
   NBEGINSUM            NUMERIC(36,14)       not null,
   NDBTURN              NUMERIC(36,14)       not null,
   NCRTURN              NUMERIC(36,14)       not null,
   NDBTURNCORR          NUMERIC(36,14)       null
);
