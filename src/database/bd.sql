CREATE DATABASE kaisenn;

USE kaisenn;

CREATE TABLE usuarios
(
    id INT(11)  NOT NULL  PRIMARY KEY , -- primary key column
    usuario varchar(50) NOT NULL,
    cedula int(11) NOT NULL,
    password VARCHAR(50) not null
    -- specify more columns here
);

ALTER TABLE usuarios MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE links
(
    id INT(11)  NOT NULL  PRIMARY KEY , -- primary key column
    title varchar(150) NOT NULL,
    url varchar(150) NOT NULL,
    descrition text,
    user_id int(11),
    created_ad TIMESTAMP not NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

ALTER TABLE links ADD PRIMARY KEY(id)

CREATE TABLE data_user
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    genero varchar(10) NOT NULL,
    ano_nacimiento date NOT NULL,
    estado_civil text,
    estudios varchar(150),
    profesion varchar(150),
    resi_ciudad varchar(150),
    resi_departamento varchar(150),
    estrato varchar(150),
    tp_vivienda varchar(150),
    n_personas int(3),
    user_id int(11),
    created_ad TIMESTAMP not NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

ALTER TABLE links ADD PRIMARY KEY(id)

CREATE TABLE data_user_empresa
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    lt_ciudad varchar(150) NOT NULL,
    lt_departamento varchar(150),
    t_empresa varchar(150),
    cargo varchar(150),
    tp_cargo varchar(150),
    area_cargo varchar(150),
    tp_contrato varchar(150),
    th_diario int(3),
    user_id int(11),
    CONSTRAINT fk_user_empresa FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

ALTER TABLE links ADD PRIMARY KEY(id)


CREATE TABLE cond_ambientales
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p1 varchar(30) NOT NULL,
    p2 varchar(30) NOT NULL,
    p3 varchar(30) NOT NULL,
    p4 varchar(30) NOT NULL,
    p5 varchar(30) NOT NULL,
    p6 varchar(30) NOT NULL,
    p7 varchar(30) NOT NULL,
    p8 varchar(30) NOT NULL,
    p9 varchar(30) NOT NULL,
    p10 varchar(30) NOT NULL,
    p11 varchar(30) NOT NULL,
    p12 varchar(30) NOT NULL,
    user_id int(11),
    created_ad TIMESTAMP not NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_ambientales FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);
---------------------------------------------------------------------------------------------------

CREATE TABLE cant_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p13 varchar(30) NOT NULL,
    p14 varchar(30) NOT NULL,
    p15 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_ct FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE esf_mental
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p16 varchar(30) NOT NULL,
    p17 varchar(30) NOT NULL,
    p18 varchar(30) NOT NULL,
    p19 varchar(30) NOT NULL,
    p20 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_esf_mental FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE jor_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p21 varchar(30) NOT NULL,
    p22 varchar(30) NOT NULL,
    p23 varchar(30) NOT NULL,
    p24 varchar(30) NOT NULL,
    p25 varchar(30) NOT NULL,
    p26 varchar(30) NOT NULL,
    p27 varchar(30) NOT NULL,
    p28 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_jor_tra FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE deci_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p29 varchar(30) NOT NULL,
    p30 varchar(30) NOT NULL,
    p31 varchar(30) NOT NULL,
    p32 varchar(30) NOT NULL,
    p33 varchar(30) NOT NULL,
    p34 varchar(30) NOT NULL,
    p35 varchar(30) NOT NULL,
    p36 varchar(30) NOT NULL,
    p37 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_deci_tra FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

------------------------------------------------------------------------------------------

CREATE TABLE camb_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p38 varchar(30) NOT NULL,
    p39 varchar(30) NOT NULL,
    p40 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_camb_trabajo FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE inf_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p41 varchar(30) NOT NULL,
    p42 varchar(30) NOT NULL,
    p43 varchar(30) NOT NULL,
    p44 varchar(30) NOT NULL,
    p45 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_inf_trabajo FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE fcap_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p46 varchar(30) NOT NULL,
    p47 varchar(30) NOT NULL,
    p48 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_fcap_trabajo FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE jefe_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p49 varchar(30) NOT NULL,
    p50 varchar(30) NOT NULL,
    p51 varchar(30) NOT NULL,
    p52 varchar(30) NOT NULL,
    p53 varchar(30) NOT NULL,
    p54 varchar(30) NOT NULL,
    p55 varchar(30) NOT NULL,
    p56 varchar(30) NOT NULL,
    p57 varchar(30) NOT NULL,
    p58 varchar(30) NOT NULL,
    p59 varchar(30) NOT NULL,
    p60 varchar(30) NOT NULL,
    p61 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_jefe_trabajo FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

----------------------------------------------------------------------------

CREATE TABLE rela_persona
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p62 varchar(30) NOT NULL,
    p63 varchar(30) NOT NULL,
    p64 varchar(30) NOT NULL,
    p65 varchar(30) NOT NULL,
    p66 varchar(30) NOT NULL,
    p67 varchar(30) NOT NULL,
    p68 varchar(30) NOT NULL,
    p69 varchar(30) NOT NULL,
    p70 varchar(30) NOT NULL,
    p71 varchar(30) NOT NULL,
    p72 varchar(30) NOT NULL,
    p73 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_rela_persona FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE rend_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p74 varchar(30) NOT NULL,
    p75 varchar(30) NOT NULL,
    p76 varchar(30) NOT NULL,
    p77 varchar(30) NOT NULL,
    p78 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_rend_trabajo FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE seg_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p79 varchar(30) NOT NULL,
    p80 varchar(30) NOT NULL,
    p81 varchar(30) NOT NULL,
    p82 varchar(30) NOT NULL,
    p83 varchar(30) NOT NULL,
    p84 varchar(30) NOT NULL,
    p85 varchar(30) NOT NULL,
    p86 varchar(30) NOT NULL,
    p87 varchar(30) NOT NULL,
    p88 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_seg_trabajo FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE si_cli_usu
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    pcli varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_cli_usu FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE cli_usu
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    pcli varchar(30) NOT NULL,
    p89 varchar(30) NOT NULL,
    p90 varchar(30) NOT NULL,
    p91 varchar(30) NOT NULL,
    p92 varchar(30) NOT NULL,
    p93 varchar(30) NOT NULL,
    p94 varchar(30) NOT NULL,
    p95 varchar(30) NOT NULL,
    p96 varchar(30) NOT NULL,
    p97 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_cli_usu FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

----------------------------------------------------------------------------------------

CREATE TABLE extra_zona_vive
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p1 varchar(30) NOT NULL,
    p2 varchar(30) NOT NULL,
    p3 varchar(30) NOT NULL,
    p4 varchar(30) NOT NULL,
    p5 varchar(30) NOT NULL,
    p6 varchar(30) NOT NULL,
    p7 varchar(30) NOT NULL,
    p8 varchar(30) NOT NULL,
    p9 varchar(30) NOT NULL,
    p10 varchar(30) NOT NULL,
    p11 varchar(30) NOT NULL,
    p12 varchar(30) NOT NULL,
    p13 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_zona_vive FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE extra_fue_traba
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p14 varchar(30) NOT NULL,
    p15 varchar(30) NOT NULL,
    p16 varchar(30) NOT NULL,
    p17 varchar(30) NOT NULL,
    p18 varchar(30) NOT NULL,
    p19 varchar(30) NOT NULL,
    p20 varchar(30) NOT NULL,
    p21 varchar(30) NOT NULL,
    p22 varchar(30) NOT NULL,
    p23 varchar(30) NOT NULL,
    p24 varchar(30) NOT NULL,
    p25 varchar(30) NOT NULL,
    p26 varchar(30) NOT NULL,
    p27 varchar(30) NOT NULL,
    p28 varchar(30) NOT NULL,
    p29 varchar(30) NOT NULL,
    p30 varchar(30) NOT NULL,
    p31 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_fue_traba FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE estres
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p1 varchar(30) NOT NULL,
    p2 varchar(30) NOT NULL,
    p3 varchar(30) NOT NULL,
    p4 varchar(30) NOT NULL,
    p5 varchar(30) NOT NULL,
    p6 varchar(30) NOT NULL,
    p7 varchar(30) NOT NULL,
    p8 varchar(30) NOT NULL,
    p9 varchar(30) NOT NULL,
    p10 varchar(30) NOT NULL,
    p11 varchar(30) NOT NULL,
    p12 varchar(30) NOT NULL,
    p13 varchar(30) NOT NULL,
    p14 varchar(30) NOT NULL,
    p15 varchar(30) NOT NULL,
    p16 varchar(30) NOT NULL,
    p17 varchar(30) NOT NULL,
    p18 varchar(30) NOT NULL,
    p19 varchar(30) NOT NULL,
    p20 varchar(30) NOT NULL,
    p21 varchar(30) NOT NULL,
    p22 varchar(30) NOT NULL,
    p23 varchar(30) NOT NULL,
    p24 varchar(30) NOT NULL,
    p25 varchar(30) NOT NULL,
    p26 varchar(30) NOT NULL,
    p27 varchar(30) NOT NULL,
    p28 varchar(30) NOT NULL,
    p26 varchar(30) NOT NULL,
    p27 varchar(30) NOT NULL,
    p29 varchar(30) NOT NULL,
    p30 varchar(30) NOT NULL,
    p31 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_estres FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

-----------------------------------Forma A------------------------------

CREATE TABLE a_cond_ambientales
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p1 varchar(30) NOT NULL,
    p2 varchar(30) NOT NULL,
    p3 varchar(30) NOT NULL,
    p4 varchar(30) NOT NULL,
    p5 varchar(30) NOT NULL,
    p6 varchar(30) NOT NULL,
    p7 varchar(30) NOT NULL,
    p8 varchar(30) NOT NULL,
    p9 varchar(30) NOT NULL,
    p10 varchar(30) NOT NULL,
    p11 varchar(30) NOT NULL,
    p12 varchar(30) NOT NULL,
    user_id int(11),
    created_ad TIMESTAMP not NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_ambientales FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_cant_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p13 varchar(30) NOT NULL,
    p14 varchar(30) NOT NULL,
    p15 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_ct FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_esf_mental
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p16 varchar(30) NOT NULL,
    p17 varchar(30) NOT NULL,
    p18 varchar(30) NOT NULL,
    p19 varchar(30) NOT NULL,
    p20 varchar(30) NOT NULL,
    p21 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_esf_mental FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);
------------------------------------------------------------------------------
CREATE TABLE a_respo_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column    
    p22 varchar(30) NOT NULL,
    p23 varchar(30) NOT NULL,
    p24 varchar(30) NOT NULL,
    p25 varchar(30) NOT NULL,
    p26 varchar(30) NOT NULL,
    p27 varchar(30) NOT NULL,
    p28 varchar(30) NOT NULL,
    p29 varchar(30) NOT NULL,
    p30 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_respo_tra FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_jor_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p31 varchar(30) NOT NULL,
    p32 varchar(30) NOT NULL,
    p33 varchar(30) NOT NULL,
    p34 varchar(30) NOT NULL,
    p35 varchar(30) NOT NULL,
    p36 varchar(30) NOT NULL,
    p37 varchar(30) NOT NULL,
    p38 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_jor_tra FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_deci_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p39 varchar(30) NOT NULL,
    p40 varchar(30) NOT NULL,
    p41 varchar(30) NOT NULL,
    p42 varchar(30) NOT NULL,
    p43 varchar(30) NOT NULL,
    p44 varchar(30) NOT NULL,
    p45 varchar(30) NOT NULL,
    p46 varchar(30) NOT NULL,
    p47 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_deci_tra FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_camb_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p48 varchar(30) NOT NULL,
    p49 varchar(30) NOT NULL,
    p50 varchar(30) NOT NULL,
    p51 varchar(30) NOT NULL,
    p52 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_camb_tra FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_inf_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p53 varchar(30) NOT NULL,
    p54 varchar(30) NOT NULL,
    p55 varchar(30) NOT NULL,
    p56 varchar(30) NOT NULL,
    p57 varchar(30) NOT NULL,
    p58 varchar(30) NOT NULL,
    p59 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_inf_tra FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_fcap_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p60 varchar(30) NOT NULL,
    p61 varchar(30) NOT NULL,
    p62 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_fcap_tra FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_jefe_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p63 varchar(30) NOT NULL,
    p64 varchar(30) NOT NULL,
    p65 varchar(30) NOT NULL,
    p66 varchar(30) NOT NULL,
    p67 varchar(30) NOT NULL,
    p68 varchar(30) NOT NULL,
    p69 varchar(30) NOT NULL,
    p70 varchar(30) NOT NULL,
    p71 varchar(30) NOT NULL,
    p72 varchar(30) NOT NULL,
    p73 varchar(30) NOT NULL,
    p74 varchar(30) NOT NULL,
    p75 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_jefe_tra FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_rela_persona
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p76 varchar(30) NOT NULL,
    p77 varchar(30) NOT NULL,
    p78 varchar(30) NOT NULL,
    p79 varchar(30) NOT NULL,
    p80 varchar(30) NOT NULL,
    p81 varchar(30) NOT NULL,
    p82 varchar(30) NOT NULL,
    p83 varchar(30) NOT NULL,
    p84 varchar(30) NOT NULL,
    p85 varchar(30) NOT NULL,
    p86 varchar(30) NOT NULL,
    p87 varchar(30) NOT NULL,
    p88 varchar(30) NOT NULL,
    p89 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_rela_persona FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_rend_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p90 varchar(30) NOT NULL,
    p91 varchar(30) NOT NULL,
    p92 varchar(30) NOT NULL,
    p93 varchar(30) NOT NULL,
    p94 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_rend_trabajo FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_satis_trabajo
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    p95 varchar(30) NOT NULL,
    p96 varchar(30) NOT NULL,
    p97 varchar(30) NOT NULL,
    p98 varchar(30) NOT NULL,
    p99 varchar(30) NOT NULL,
    p100 varchar(30) NOT NULL,
    p101 varchar(30) NOT NULL,
    p102 varchar(30) NOT NULL,
    p103 varchar(30) NOT NULL,
    p104 varchar(30) NOT NULL,
    p105 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_satis_trabajo FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);

CREATE TABLE a_cli_usu
(
    id INT(11)  NOT NULL AUTO_INCREMENT PRIMARY KEY , -- primary key column
    pcli varchar(30) NOT NULL,
    p106 varchar(30) NOT NULL,
    p107 varchar(30) NOT NULL,
    p108 varchar(30) NOT NULL,
    p109 varchar(30) NOT NULL,
    p110 varchar(30) NOT NULL,
    p111 varchar(30) NOT NULL,
    p112 varchar(30) NOT NULL,
    p113 varchar(30) NOT NULL,
    p114 varchar(30) NOT NULL,
    user_id int(11),
    CONSTRAINT fk_a_cli_usu FOREIGN KEY (user_id) REFERENCES usuarios(id)
    -- specify more columns here
);
