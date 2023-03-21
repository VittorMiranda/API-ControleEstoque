//permite o acesso dos metodos dos controulers
const router = require('express').Router();


//import controllers
const UserCeontroller = require('./controllers/UserController')

router.post('/create', UserCeontroller.create);
router.post('/login', UserCeontroller.login);

module.exports = router;