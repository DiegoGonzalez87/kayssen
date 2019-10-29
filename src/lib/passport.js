const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('./helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'cedula',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, cedula, password, done) => {
    const rows = await pool.query('SELECT * FROM usuarios WHERE cedula = ?', [cedula]);
    if (rows.length > 0) {
      const user = rows[0];
      const validPassword = await helpers.matchPassword(password, user.password)
      // console.log(validPassword);
      if (validPassword) {
        done(null, user, req.flash('mensaje', 'Welcome ' + user.usuario));
      } else {
        done(null, false, req.flash('mensaje', 'Incorrect Password'));
      }
    } else {
      return done(null, false, req.flash('mensaje', 'The Username does not exists.'));
    }
  }));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'cedula',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, cedula, password, done) => {
    const { usuario } = req.body;
    // console.log(req.body)
    const NuevoUser = {
        cedula,
        password,
        usuario
    };
    // const cedu = await pool.query('SELECT * FROM usuarios WHERE cedula = ?', [cedula]);
    // if (cedu)
    NuevoUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO usuarios set ?', [NuevoUser]);
    NuevoUser.id = result.insertId;
    return done(null, NuevoUser);
}));

passport.serializeUser((user, done) =>{
    done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('select * from usuarios where id = ?', [id]);
    done(null, rows[0]);
})
