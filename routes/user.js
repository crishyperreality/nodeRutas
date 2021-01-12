const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('/user');
});

router.get('/altura', (req,res)=>{
    res.send('/user/altura');
});

router.get('/edad', (req,res)=>{
    res.send('/user/edad');
});

module.exports = router;