
const { response, request } = require('express');
const { dbConnection } = require('../database/config');

const createUser = (req = request, res = response) => {
    const {nombre, apellido, fecha_n} = req.body
    
    dbConnection.query('INSERT INTO users SET ?', {nombre, apellido, fecha_n}, function(err, results, fields){
        if(err) throw err;
        if(results.affectedRows > 0){
            res.json({
                ok:true,
                userId:results.insertId
            })
        }else{
            res.json({
                ok:false,
                message:"Error al insertar en la base de datos"
            })

        }

    })
}
const listUsers = (req = request, res = response) => {
    dbConnection.query('SELECT * FROM users', function(err, results, fields){
        if(err) throw err;
        res.json({
            users:results
        })

    })
}
const promAge = (req = request, res = response) => {
    dbConnection.query('SELECT fecha_n FROM users', function(err, results, fields){
        if(err) throw err;
        let promAge = 0;
        results.map(fecha => {
            const actualDate = new Date().getFullYear();
            const userDate = new Date(fecha.fecha_n).getFullYear();
            promAge += (actualDate - userDate);
        })
        promAge = (promAge / results.length).toFixed(2);
        res.json({
            prom: promAge
        })

    })

}

module.exports = {
    createUser,
    listUsers,
    promAge
}