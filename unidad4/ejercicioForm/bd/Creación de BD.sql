CREATE DATABASE PWDB;
use PWDB;
CREATE TABLE Usuarios(
	id int auto_increment primary key,
    nombre varchar(50) not null,
    apellido1 varchar(50) not null,
    apellido2 varchar(50),
    email varchar(100) not null unique,
    fechaNac date,
    edad int,
    genero char(1) not null,
    intereses varchar(100) not null,
    estadoCivil tinyint not null,
    password varchar(60) null
);

