const express = require('express');
const router = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

// ------------------- Informacion en el trabajo ------------------------------------//
router.get('/pag340', isLoggedIn, (req, res)=>{
    res.render('extralabo/extra_zona_vive');
});

//insertar
router.post('/pag340',  isLoggedIn, async (req, res)=>{
    const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13 } = req.body;
    console.log(req.body);
    const newLink = {
        p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, user_id: req.user.id
    };
    await pool.query('INSERT INTO extra_zona_vive set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag350');
});

// ------------------- Informacion en el trabajo ------------------------------------//

router.get('/pag350', isLoggedIn, (req, res)=>{
    res.render('extralabo/extra_fue_traba');
});

//insertar
router.post('/pag350',  isLoggedIn, async (req, res)=>{
    const { p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31 } = req.body;
    console.log(req.body);
    const newLink = {
        p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, user_id: req.user.id
    };
    await pool.query('INSERT INTO extra_fue_traba set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag703');
});

router.get('/pag360', isLoggedIn, (req, res)=>{
    res.render('extralabo/estres');
});

//insertar
router.post('/pag360',  isLoggedIn, async (req, res)=>{
    const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31 } = req.body;
    console.log(req.body);
    const newLink = {
        p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, user_id: req.user.id
    };
    await pool.query('INSERT INTO estres set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag705');
});


module.exports = router;