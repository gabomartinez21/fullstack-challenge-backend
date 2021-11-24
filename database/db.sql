CREATE DATABASE fullstack;

CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(40),
    apellido VARCHAR(40),
    fecha_n DATE,
    PRIMARY KEY (id)
);