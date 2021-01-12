const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('/product');
});

router.get('/calzado', (req,res)=>{
    res.send('/product/calzado');
});

router.get('/pantalon', (req,res)=>{
    res.send('/product/pantalon');
});

module.exports = router;