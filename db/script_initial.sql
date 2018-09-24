use somdegaragemdb;

SHOW TABLES FROM somdegaragemdb;

CREATE TABLE acessos(
	id_tipo integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    desc_acesso varchar(60)
);

CREATE TABLE usuario(
	id_usuario integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_usuario varchar(500) NOT NULL,
    email_usuario varchar(500) NOT NULL,
    acessoID integer,
    foreign key acessoID references acessos(id_tipo)
);

CREATE TABLE login(
	id_login integer not null primary key auto_increment,
    login varchar(500),
    senha -- password -- varchar,
    data_cadastro datetime
)

CREATE TABLE artista(
	id_artista NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tipoID integer
    foreign key tipoID references acessos(id_tipo),
    qtd_seguidores bigint,
    banda_fundacao datetime,
    data_cadastro datetime,
    plano_assinatura integer,
    FOREIGN KEY plano_assinatura REFERENCES planos(id_plano)
    playlistID integer,
    FOREIGN KEY playlistID REFERENCES playlist(id_playlist),
    albumID integer,
    FOREIGN KEY albumID REFERENCES albuns(id_album)
);

CREATE TABLE planos(
	id_plano integer not null primary key auto_increment,
    desc_plano varchar(500),
    valor_plano decimal(5,2)
	
);

CREATE TABLE ouvinte(
	id_ouvinte integer not null primary key auto_increment,
	tipoID integer,
    foreign key tipoID references acessos(id_tipo),
    data_cadastro datetime,
    plano_assinatura integer,
    FOREIGN KEY plano_assinatura REFERENCES planos(id_plano),
    playlistID integer,
    FOREIGN KEY playlistID REFERENCES playlist(id_playlist),
    id_genero integer NOT NULL,
    FOREIGN KEY id_genero REFERENCES genero_ouvinte(id_genero)
);

CREATE TABLE seguidores(
	id_seg integer not null primary key auto_increment,
    artistaID integer,
    ouvinteID integer,
    FOREIGN KEY artistaID references artista(id_artista),
    FOREIGN KEY ouvinteID references ouvinte(id_ouvinte),
    ativo integer NOT NULL
);

CREATE TABLE genero_musical(
	id_genero integer not null primary key auto_increment,
    desc_genero varchar(60) not null
);

CREATE TABLE genero_ouvinte(
	id_gen_ouvinte integer not null primary key auto_increment,
    ouvinteID integer NOT NULL,
    foreign key ouvinteID references ouvinte(id_ouvinte),
    generoID integer NOT NULL,
    foreign key generoID references genero(id_genero)
);

CREATE TABLE genero_artista(
	id_gen_artista integer not null primary key auto_increment,
    artistaID integer NOT NULL,
    foreign key artistaID references artista(id_artista),
    generoID integer NOT NULL,
    foreign key generoID references genero(id_genero)
);

