//permite o acesso dos metodos dos controulers
const router = require('express').Router();


//import controllers
const UserCeontroller = require('./controllers/UserController');
const ProdutoController = require('./controllers/ProdutoController');
const CategoriaController = require('./controllers/CategoriaController');
const SubcategoriaController = require('./controllers/SubcategoriaController');
//permite que a api fique publica para ser acessada pelas aplicações
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})
//rotas da tabela users
router.post('/User/create', UserCeontroller.create);
router.post('/User/login', UserCeontroller.login);
//rotas produto
router.post('/Produto/create', ProdutoController.create);
router.post('/Produto/edit', ProdutoController.edit);
router.post('/Produto/delete', ProdutoController.delete);
router.get('/Produto/select', ProdutoController.select);
//rotas categoria
router.post('/Categoria/create', CategoriaController.create);
router.post('/Categoria/edit', CategoriaController.edit);
router.post('/Categoria/delete', CategoriaController.delete);
//rotas subcategoria
router.post('/Subcategoria/create', SubcategoriaController.create);
router.post('/Subcategoria/edit', SubcategoriaController.edit);
router.post('/Subcategoria/delete', SubcategoriaController.delete);
module.exports = router;