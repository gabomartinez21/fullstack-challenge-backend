# FullStack Backend

Este proyecto tiene como objetivo demostrar las habilidades en NodeJS y MySQL

## Installation

```bash
npm install
```

.env: example
```
HOTS=HOST
USER=USER
PASSWORD=PASSWORD
DATABASE=DATABASE
```

## Usage

Listar usuarios
```
GET: {{host}}/api/user/
```
Crear Usuario
```
POST: {{host}}/api/user/
/*
    req: {nombre, apellido, fecha_n}
*/
```
Promediar edad de usuarios
```
GET: {{host}}/api/user/prom
```
