CREATE TABLE space_weather (
  Year INTEGER NOT NULL,
  Day INTEGER NOT NULL,
  Hour INTEGER NOT NULL,
  MAG_AVG_FIELD REAL,
  BX_GSE REAL,
  SIGMA_B REAL,
  SIGMA_BX REAL,
  SIGMA_BY REAL,
  SIGMA_BZ REAL,
  NA_NP REAL,
  SIGMA_PHI_V REAL,
  SIGMA_THETA_V REAL,
  PROT_FLUX_1 REAL,
  PROT_FLUX_2 REAL,
  PROT_FLUX_30 REAL,
  PROT_FLUX_60 REAL,
  PC_N REAL,
  KP REAL,
  prediction REAL, combined_datetime timestamp,
  CONSTRAINT pk_space_weather PRIMARY KEY (Year, Day, Hour)
);
CREATE INDEX idx_combined_datetime ON space_weather(combined_datetime);