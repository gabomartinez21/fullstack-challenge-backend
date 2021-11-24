const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 4000;

        this.paths = {
            usuarios:'/api/users',
        }

        this.conectarDB();

        this.middelwares()
        
        this.routes();
    }

    async conectarDB(){
        dbConnection.connect((err)=>{
            if(err) throw err;
            console.log('Base de datos online');
        });
    }

    middelwares(){
        this.app.use(cors());
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.paths.usuarios, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, (req,res)=>{
            console.log('Servidor corriendo en el puerto',this.port);
        })
    }
}

module.exports = Server