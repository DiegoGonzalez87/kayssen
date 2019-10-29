const express = require('express');
const router = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/add', isLoggedIn, (req, res)=>{
    res.render('links/add');
});

//insertar
router.post('/add', isLoggedIn, async (req, res)=>{
    const {title, url, descrition } = req.body;
    const newLink = {
        title,
        url,
        descrition,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO links set ?', [newLink]);
    req.flash('mensaje', 'Se guardo Correctamente.');
    res.redirect('/links');
});

//mostrar
router.get('/links', isLoggedIn, async(req, res) => {
    const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
    res.render('links/lista', {links});
});

// eliminar
router.get('/delete/:id', isLoggedIn, async (req, res) => {
    const {id} = req.params;
    await pool.query('delete from links where ID = ?', [id]);
    req.flash('mensaje', 'Se Elimino Correctamente.');
    res.redirect('/links');
});

//editar
router.get('/edit/:id', isLoggedIn, async (req, res)=>{
    const{id} = req.params;
    const links = await pool.query('select * from links where id = ?', [id]);
    console.log(links);
    res.render('links/edit', {links: links[0]});
});

router.post('/edit/:id', async (req, res) =>{
    const{id} = req.params;
    const{ title, descrition, url } = req.body;
    const newLink = {
        title,
        url,
        descrition
    };
    await pool.query('UPDATE links set ? where id = ?', [newLink, id]);
    req.flash('mensaje', 'Se Actulizo Correctamente.');
    res.redirect('/links');
});

module.exports = router;