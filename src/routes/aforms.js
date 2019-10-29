const express = require('express');
const router = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');
//--------------------Condiciones ambientales-----------------------------//
router.get('/pag400', isLoggedIn, (req, res)=>{
    res.render('aforms/a_cond_ambientales');
});

//insertar
router.post('/pag400',  isLoggedIn, async (req, res)=>{
    const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12 } = req.body;
    console.log(req.body);
    const newLink = {
        p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_cond_ambientales set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag410');
});

//--------------------Cantidad De trabajo-----------------------------//
router.get('/pag410', isLoggedIn, (req, res)=>{
    res.render('aforms/a_cant_trabajo');
});

//insertar
router.post('/pag410',  isLoggedIn, async (req, res)=>{
    const { p13, p14, p15 } = req.body;
    console.log(req.body);
    const newLink = {
        p13, p14, p15, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_cant_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag420');
});

//--------------------Esfuerzo Mental-----------------------------//
router.get('/pag420', isLoggedIn, (req, res)=>{
    res.render('aforms/a_esf_mental');
});

//insertar
router.post('/pag420',  isLoggedIn, async (req, res)=>{
    const { p16, p17, p18, p19, p20, p21 } = req.body;
    console.log(req.body);
    const newLink = {
        p16, p17, p18, p19, p20, p21, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_esf_mental set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag430');
});

//--------------------Responsabilidades en el trabajo-----------------------------//
router.get('/pag430', isLoggedIn, (req, res)=>{
    res.render('aforms/a_respo_trabajo');
});

//insertar
router.post('/pag430',  isLoggedIn, async (req, res)=>{
    const { p22, p23, p24, p25, p26, p27, p28, p29, p30 } = req.body;
    console.log(req.body);
    const newLink = {
        p22, p23, p24, p25, p26, p27, p28, p29, p30, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_respo_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag440');
});

//--------------------Jornada de trabajo-----------------------------//
router.get('/pag440', isLoggedIn, (req, res)=>{
    res.render('aforms/a_jor_trabajo');
});

//insertar
router.post('/pag440',  isLoggedIn, async (req, res)=>{
    const { p31, p32, p33, p34, p35, p36, p37, p38 } = req.body;
    console.log(req.body);
    const newLink = {
        p31, p32, p33, p34, p35, p36, p37, p38, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_jor_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag450');
});

//--------------------Desiciones en el trabajo-----------------------------//
router.get('/pag450', isLoggedIn, (req, res)=>{
    res.render('aforms/a_deci_trabajo');
});

//insertar
router.post('/pag450',  isLoggedIn, async (req, res)=>{
    const { p39, p40, p41, p42, p43, p44, p45, p46, p47 } = req.body;
    console.log(req.body);
    const newLink = {
        p39, p40, p41, p42, p43, p44, p45, p46, p47, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_deci_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag460');
});

//--------------------Cambio en el trabajo-----------------------------//
router.get('/pag460', isLoggedIn, (req, res)=>{
    res.render('aforms/a_camb_trabajo');
});

//insertar
router.post('/pag460',  isLoggedIn, async (req, res)=>{
    const { p48, p49, p50, p51, p52 } = req.body;
    console.log(req.body);
    const newLink = {
        p48, p49, p50, p51, p52, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_camb_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag470');
});

//--------------------Informacion en el trabajo-----------------------------//
router.get('/pag470', isLoggedIn, (req, res)=>{
    res.render('aforms/a_inf_trabajo');
});

//insertar
router.post('/pag470',  isLoggedIn, async (req, res)=>{
    const { p53, p54, p55, p56, p57, p58, p59 } = req.body;
    console.log(req.body);
    const newLink = {
        p53, p54, p55, p56, p57, p58, p59, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_inf_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag480');
});

//--------------------Formacion y capacitacion en el trabajo-----------------------------//
router.get('/pag480', isLoggedIn, (req, res)=>{
    res.render('aforms/a_fcap_trabajo');
});

//insertar
router.post('/pag480',  isLoggedIn, async (req, res)=>{
    const { p60, p61, p62 } = req.body;
    console.log(req.body);
    const newLink = {
        p60, p61, p62, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_fcap_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag490');
});

//--------------------jefe en el trabajo-----------------------------//
router.get('/pag490', isLoggedIn, (req, res)=>{
    res.render('aforms/a_jefe_trabajo');
});

//insertar
router.post('/pag490',  isLoggedIn, async (req, res)=>{
    const { p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75 } = req.body;
    console.log(req.body);
    const newLink = {
        p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_jefe_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag500');
});

//--------------------Relacion personas-----------------------------//
router.get('/pag500', isLoggedIn, (req, res)=>{
    res.render('aforms/a_rela_persona');
});

//insertar
router.post('/pag500',  isLoggedIn, async (req, res)=>{
    const { p76, p77, p78, p79, p80, p81, p82, p83, p84, p85, p86, p87, p88, p89 } = req.body;
    console.log(req.body);
    const newLink = {
        p76, p77, p78, p79, p80, p81, p82, p83, p84, p85, p86, p87, p88, p89, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_rela_persona  set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag610');
});

//--------------------Rendimiento en el Trabajo-----------------------------//
router.get('/pag610', isLoggedIn, (req, res)=>{
    res.render('aforms/a_rend_trabajo');
});

//insertar
router.post('/pag610',  isLoggedIn, async (req, res)=>{
    const { p90, p91, p92, p93, p94 } = req.body;
    console.log(req.body);
    const newLink = {
        p90, p91, p92, p93, p94, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_rend_trabajo  set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag620');
});

//--------------------Satisfaciones en el Trabajo-----------------------------//
router.get('/pag620', isLoggedIn, (req, res)=>{
    res.render('aforms/a_satis_trabajo');
});

//insertar
router.post('/pag620',  isLoggedIn, async (req, res)=>{
    const { p95, p96, p97, p98, p99, p100, p101, p102, p103, p104, p105 } = req.body;
    console.log(req.body);
    const newLink = {
        p95, p96, p97, p98, p99, p100, p101, p102, p103, p104, p105, user_id: req.user.id
    };
    await pool.query('INSERT INTO a_satis_trabajo  set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag620');
});

// ------------------- seguridad en el trabajo ------------------------------------//

router.get('/pag620', isLoggedIn, (req, res)=>{
    res.render('forms/a_cli_usu');
});



//insertar
router.post('/pag620',  isLoggedIn, async (req, res)=>{
    // const pcli = await pool.query('SELECT pcli FROM si_cli_usu WHERE user_id = ?', [req.user.id]);
    // console.log('holaa')
    const {  pcli, p106, p107, p108, p109, p110, p111, p112, p113, p114 } = req.body;
    console.log(req.body);
    if (pcli == 'si'){
    const newLink = {
        pcli, p106, p107, p108, p109, p110, p111, p112, p113, p114, user_id: req.user.id
    };
        await pool.query('INSERT INTO a_cli_usu set ?', [newLink]);
        req.flash('mensaje', 'Se guardo Correctamente.');
        res.redirect('/pag703');
    }else{
        res.redirect('/pag703');
    }
});

module.exports = router;