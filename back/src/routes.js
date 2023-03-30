//permite o acesso dos metodos dos controulers
const router = require('express').Router();


//import controllers
const UserCeontroller = require('./controllers/UserController')
const ProdutoController = require('./controllers/ProdutoController')
//permite que a api fique publica para ser acessada pelas aplicações
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})
//rotas da tabela users
router.post('/User/create', UserCeontroller.create);
router.post('/User/login', UserCeontroller.login);
router.post('/Produto/create', ProdutoController.create);

module.exports = router;