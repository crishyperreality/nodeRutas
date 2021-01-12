const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('ok');
});

router.get('/si', (req,res)=>{
    res.send('/login/si');
});

router.get('/no/:mensaje', (req,res)=>{
    let mensaje = req.params.mensaje
    console.log(req.params.mensaje)
    res.send(mensaje);
});

module.exports = router;