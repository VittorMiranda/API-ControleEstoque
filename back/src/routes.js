//permite o acesso dos metodos dos controulers
const router = require('express').Router();


//import controllers
const UserCeontroller = require('./controllers/UserController');
const ProdutoController = require('./controllers/ProdutoController');
const CategoriaController = require('./controllers/CategoriaController');
const SubcategoriaController = require('./controllers/SubcategoriaController');
const PessoaController = require('./controllers/PessoaController');
const PessoaFisicaController = require('./controllers/PessoaFisicaController');
const PessoaJuridicaController = require('./controllers/PessoaJuridicaController');
const PessoaTellController = require('./controllers/PessoaTellController');
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
router.post('/Pessoa/create', PessoaController.create);
router.post('/Pessoa/edit', PessoaController.edit);
router.post('/Pessoa/delete', PessoaController.delete);
router.get('/Pessoa/mostrar', PessoaController.mostrar);

//rotas pessoa_fisica
router.post('/PessoaFisica/create', PessoaFisicaController.create);
router.post('/PessoaFisica/edit', PessoaFisicaController.edit);
router.post('/PessoaFisica/delete', PessoaFisicaController.delete);
router.get('/PessoaFisica/mostrar', PessoaFisicaController.mostrar);

//rotas pessoa_juridica
router.post('/PessoaJuridica/create', PessoaJuridicaController.create);
router.post('/PessoaJuridica/edit', PessoaJuridicaController.edit);
router.post('/PessoaJuridica/delete', PessoaJuridicaController.delete);
router.get('/PessoaJuridica/mostrar', PessoaJuridicaController.mostrar);

//rotas pessoa_tel
router.post('/PessoaTell/create', PessoaTellController.create);
router.post('/PessoaTell/edit', PessoaTellController.edit);
router.post('/PessoaTell/delete', PessoaTellController.delete);
router.get('/PessoaTell/mostrar', PessoaTellController.mostrar);
module.exports = router;