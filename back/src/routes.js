//permite o acesso dos metodos dos controulers
const router = require('express').Router();


//import controllers
const UserCeontroller = require('./controllers/UserController');
const ProdutoController = require('./controllers/ProdutoController');
const CategoriaController = require('./controllers/CategoriaController');
const SubcategoriaController = require('./controllers/SubcategoriaController');
const ClienteFornecedorController = require('./controllers/ClienteFornecedorController');
const ClienteFornecedorTellController = require('./controllers/ClienteFornecedorTellController');
//permite que a api fique publica para ser acessada pelas aplicações
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})
//rotas da tabela users
router.post('/User/create', UserCeontroller.create);
router.post('/User/login', UserCeontroller.login);
router.post('/User/editsenha', UserCeontroller.edit);

//rotas produto
router.post('/Produto/create', ProdutoController.create);
router.post('/Produto/edit', ProdutoController.edit);
router.post('/Produto/delete', ProdutoController.delete);
router.get('/Produto/mostrar', ProdutoController.mostrar);
router.get('/Produto/buscar', ProdutoController.buscar);

//rotas categoria
router.post('/Categoria/create', CategoriaController.create);
router.post('/Categoria/edit', CategoriaController.edit);
router.post('/Categoria/delete', CategoriaController.delete);
router.get('/Categoria/mostrar', CategoriaController.mostrar);

//rotas subcategoria
router.post('/Subcategoria/create', SubcategoriaController.create);
router.post('/Subcategoria/edit', SubcategoriaController.edit);
router.post('/Subcategoria/delete', SubcategoriaController.delete);
router.get('/Subcategoria/mostrar', SubcategoriaController.mostrar);

//rotas pessoa
router.post('/ClienteFornecedor/create', ClienteFornecedorController.create);
router.post('/ClienteFornecedor/edit', ClienteFornecedorController.edit);
router.post('/ClienteFornecedor/delete', ClienteFornecedorController.delete);
router.get('/ClienteFornecedor/mostrar', ClienteFornecedorController.mostrar);
router.get('/ClienteFornecedor/buscar', ClienteFornecedorController.buscar);



//rotas pessoa_tel
router.post('/ClienteFornecedorTell/create', ClienteFornecedorTellController.create);
router.post('/ClienteFornecedorTell/edit', ClienteFornecedorTellController.edit);
router.post('/ClienteFornecedorTell/delete', ClienteFornecedorTellController.delete);
router.get('/ClienteFornecedorTell/mostrar', ClienteFornecedorTellController.mostrar);
module.exports = router;