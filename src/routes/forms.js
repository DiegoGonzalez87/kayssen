const express = require('express');
const router = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/usuario', isLoggedIn, (req, res)=>{
    res.render('forms/usuario');
});

//insertar
router.post('/usuario',  isLoggedIn, async (req, res)=>{
    const { genero, ano_nacimiento, estado_civil, estudios, profesion, resi_ciudad, resi_departamento, estrato, tp_vivienda, n_personas } = req.body;
    // console.log(req.body)
    const newLink = {
        genero, 
        ano_nacimiento, 
        estado_civil, 
        estudios, 
        profesion, 
        resi_ciudad, 
        resi_departamento, 
        estrato, 
        tp_vivienda, 
        n_personas,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO data_user set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag201');
});

//mostrar
router.get('/tabla', isLoggedIn, async(req, res) => {
    if ([req.user.perfil] == 2){
        const data = await pool.query('SELECT * FROM data_user INNER JOIN usuarios ON user_id = ?', [req.user.id]);
        res.render('forms/tabla', {data});
    }else{
        res.send('muy mal');
    }
});
// ------------------- Datos Empresa ------------------------------------//
router.get('/pag201', (req, res)=>{
    res.render('forms/dato_empresa');
});

//insertar
router.post('/pag201',  isLoggedIn, async (req, res)=>{
    const { lt_ciudad, lt_departamento, t_empresa, cargo, tp_cargo, area_cargo, tiempo_cargo, tp_contrato, th_diario, tp_salario } = req.body;
    console.log(req.body);
    const newLink = {
        lt_ciudad, 
        lt_departamento, 
        t_empresa, 
        cargo, 
        tp_cargo, 
        area_cargo, 
        tp_contrato,        
        tiempo_cargo, 
        th_diario,
        tp_salario,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO data_user_empresa set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    if ([req.user.tforma] == 1){
        res.redirect('/pag702');
    }else{
        res.redirect('/pag701');
    }
});

// ------------------- Condicines ambientales ------------------------------------//
router.get('/pag210', isLoggedIn, (req, res)=>{
    res.render('forms/cond_ambientales');
});

//insertar
router.post('/pag210',  isLoggedIn, async (req, res)=>{
    const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12 } = req.body;
    console.log(req.body);
    const newLink = {
        p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, user_id: req.user.id
    };
    await pool.query('INSERT INTO cond_ambientales set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag220');
});

// ------------------- Cantidad de trabajp ------------------------------------//
router.get('/pag220', isLoggedIn, (req, res)=>{
    res.render('forms/cant_trabajo');
});

//insertar
router.post('/pag220',  isLoggedIn, async (req, res)=>{
    const { p13, p14, p15 } = req.body;
    console.log(req.body);
    const newLink = {
        p13, p14, p15, user_id: req.user.id
    };
    await pool.query('INSERT INTO cant_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag230');
});

// ------------------- Esfuerzo mental ------------------------------------//
router.get('/pag230', (req, res)=>{
    res.render('forms/esf_mental');
});

//insertar
router.post('/pag230',  isLoggedIn, async (req, res)=>{
    const { p16, p17, p18, p19, p20 } = req.body;
    console.log(req.body);
    const newLink = {
        p16, p17, p18, p19, p20, user_id: req.user.id
    };
    await pool.query('INSERT INTO esf_mental set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag240');
});

// ------------------- Jornada laboral ------------------------------------//
router.get('/pag240', isLoggedIn, (req, res)=>{
    res.render('forms/jor_trabajo');
});

//insertar
router.post('/pag240',  async (req, res)=>{
    const { p21, p22, p23, p24, p25, p26, p27, p28 } = req.body;
    console.log(req.body);
    const newLink = {
        p21, p22, p23, p24, p25, p26, p27, p28, user_id: req.user.id
    };
    await pool.query('INSERT INTO jor_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag250');
});

// ------------------- desicion en el trabajo ------------------------------------//
router.get('/pag250', isLoggedIn, (req, res)=>{
    res.render('forms/deci_trabajo');
});

//insertar
router.post('/pag250',  isLoggedIn, async (req, res)=>{
    const { p29, p30, p31, p32, p33, p34, p35, p36, p37 } = req.body;
    console.log(req.body);
    const newLink = {
        p29, p30, p31, p32, p33, p34, p35, p36, p37, user_id: req.user.id
    };
    await pool.query('INSERT INTO deci_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag260');
});

// ------------------- Cambio en el trabajo ------------------------------------//
router.get('/pag260', isLoggedIn, (req, res)=>{
    res.render('forms/camb_trabajo');
});

//insertar
router.post('/pag260', isLoggedIn, async (req, res)=>{
    const { p38, p39, p40 } = req.body;
    console.log(req.body);
    const newLink = {
        p38, p39, p40, user_id: req.user.id
    };
    await pool.query('INSERT INTO camb_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag270');
});

// ------------------- Informacion en el trabajo ------------------------------------//
router.get('/pag270', isLoggedIn, (req, res)=>{
    res.render('forms/inf_trabajo');
});

//insertar
router.post('/pag270',  isLoggedIn, async (req, res)=>{
    const { p41, p42, p43, p44, p45 } = req.body;
    console.log(req.body);
    const newLink = {
        p41, p42, p43, p44, p45, user_id: req.user.id
    };
    await pool.query('INSERT INTO inf_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag280');
});

// ------------------- Formacion y capacitacion en el trabajo ------------------------------------//
router.get('/pag280', isLoggedIn, (req, res)=>{
    res.render('forms/fcap_trabajo');
});

//insertar
router.post('/pag280',  isLoggedIn, async (req, res)=>{
    const { p46, p47, p48 } = req.body;
    console.log(req.body);
    const newLink = {
        p46, p47, p48, user_id: req.user.id
    };
    await pool.query('INSERT INTO fcap_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag290');
});

// ------------------- jefe en el trabajo ------------------------------------//
router.get('/pag290', isLoggedIn, (req, res)=>{
    res.render('forms/jefe_trabajo');
});

//insertar
router.post('/pag290',  isLoggedIn, async (req, res)=>{
    const { p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59, p60, p61 } = req.body;
    console.log(req.body);
    const newLink = {
        p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59, p60, p61, user_id: req.user.id
    };
    await pool.query('INSERT INTO jefe_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag300');
});

// ------------------- ralacion con personas------------------------------------//
router.get('/pag300', isLoggedIn, (req, res)=>{
    res.render('forms/rela_persona');
});

//insertar
router.post('/pag300',  isLoggedIn, async (req, res)=>{
    const { p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73 } = req.body;
    console.log(req.body);
    const newLink = {
        p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, user_id: req.user.id
    };
    await pool.query('INSERT INTO rela_persona set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag310');
});

// ------------------- rnedimiento en el trabajo ------------------------------------//
router.get('/pag310', isLoggedIn, (req, res)=>{
    res.render('forms/rend_trabajo');
});

//insertar
router.post('/pag310',  isLoggedIn, async (req, res)=>{
    const { p74, p75, p76, p77, p78 } = req.body;
    console.log(req.body);
    const newLink = {
        p74, p75, p76, p77, p78, user_id: req.user.id
    };
    await pool.query('INSERT INTO rend_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag320');
});

// ------------------- seguridad en el trabajo ------------------------------------//
router.get('/pag320', isLoggedIn, (req, res)=>{
    res.render('forms/seg_trabajo');
});

//insertar
router.post('/pag320',  isLoggedIn, async (req, res)=>{
    const { p79, p80, p81, p82, p83, p84, p85, p86, p87, p88 } = req.body;
    console.log(req.body);
    const newLink = {
        p79, p80, p81, p82, p83, p84, p85, p86, p87, p88, user_id: req.user.id
    };
    await pool.query('INSERT INTO seg_trabajo set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/pag330');
});

// ------------------- seguridad en el trabajo ------------------------------------//

router.get('/pag330', isLoggedIn, (req, res)=>{
    res.render('forms/cli_usu');
});

//insertar
router.post('/pag330',  isLoggedIn, async (req, res)=>{
    // const pcli = await pool.query('SELECT pcli FROM si_cli_usu WHERE user_id = ?', [req.user.id]);
    // console.log('holaa')
    const {  pcli, p89, p90, p91, p92, p93, p94, p95, p96, p97 } = req.body;
    console.log(req.body);
    if (pcli == 'si'){
    const newLink = {
         p89, p90, p91, p92, p93, p94, p95, p96, p97, user_id: req.user.id
    };
        await pool.query('INSERT INTO cli_usu set ?', [newLink]);
        req.flash('mensaje', 'Se guardo Correctamente.');
        res.redirect('/pag703');
    }else{
        res.redirect('/pag703');
    }
});


//mostrar
router.get('/tabla', isLoggedIn, async(req, res) => {
    if ([req.user.perfil] == 2){
        const data = await pool.query('SELECT * FROM data_user INNER JOIN usuarios ON user_id = ?', [req.user.id]);
        res.render('forms/tabla', {data});
    }else{
        res.send('muy mal');
    }
});

module.exports = router;