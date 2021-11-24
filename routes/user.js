const { Router }=require('express');
const { check } = require('express-validator');
const {createUser, listUsers, promAge} = require('../controllers/users');

const router = Router();

router.get('/', listUsers)
router.get('/prom', promAge)
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
], createUser)


module.exports = router;