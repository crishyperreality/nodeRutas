const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('ok');
});

router.get('/fabrica', (req,res)=>{
    res.send('/index/fabrica');
});

router.get('/empleados', (req,res)=>{
    res.send('/index/empleados');
});

module.exports = router;