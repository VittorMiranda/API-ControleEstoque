//permite o acesso dos metodos dos controulers
const router = require('express').Router();


//import controllers
const UserCeontroller = require('./controllers/UserController');
const ProdutoController = require('./controllers/ProdutoController');
const CategoriaController = require('./controllers/CategoriaController');
const SubcategoriaController = require('./controllers/SubcategoriaController');
const ClienteFornecedorController = require('./controllers/ClienteFornecedorController');
const ClienteFornecedorTellController = require('./controllers/ClienteFornecedorTellController');
const RelacionamentoCategoriaSubcategoriaController = require('./controllers/RelacionamentoCategoriaSubcategoriaController');
const RelacionamentoCategoriaProdutoController = require('./controllers/RelacionamentoCategoriaProdutoController');
const RelacionamentoSubcategoriaProdutoController = require('./controllers/RelacionamentoSubcategoriaProdutoController');
const MarcaController = require('./controllers/MarcaController')
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

//rotas marca
router.post('/Marca/create', MarcaController.create);
router.post('/Marca/edit', MarcaController.edit);
router.post('/Marca/delete', MarcaController.delete);
router.get('/Marca/mostrar', MarcaController.mostrar);

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

//rotas categoria_subcategoria
router.post('/RelacionamentoCategoriaSubcategoria/create', RelacionamentoCategoriaSubcategoriaController.create);
router.post('/RelacionamentoCategoriaSubcategoria/edit', RelacionamentoCategoriaSubcategoriaController.edit);
router.post('/RelacionamentoCategoriaSubcategoria/delete', RelacionamentoCategoriaSubcategoriaController.delete);
router.get('/RelacionamentoCategoriaSubcategoria/mostrar', RelacionamentoCategoriaSubcategoriaController.mostrar);

//rotas categoria_produto
router.post('/RelacionamentoCategoriaProduto/create', RelacionamentoCategoriaProdutoController.create);
router.post('/RelacionamentoCategoriaProduto/edit', RelacionamentoCategoriaProdutoController.edit);
router.post('/RelacionamentoCategoriaProduto/delete', RelacionamentoCategoriaProdutoController.delete);
router.get('/RelacionamentoCategoriaProduto/mostrar', RelacionamentoCategoriaProdutoController.mostrar);

//rotas subcategoria_produto
router.post('/RelacionamentoSubcategoriaProduto/create', RelacionamentoSubcategoriaProdutoController.create);
router.post('/RelacionamentoSubcategoriaProduto/edit', RelacionamentoSubcategoriaProdutoController.edit);
router.post('/RelacionamentoSubcategoriaProduto/delete', RelacionamentoSubcategoriaProdutoController.delete);
router.get('/RelacionamentoSubcategoriaProduto/mostrar', RelacionamentoSubcategoriaProdutoController.mostrar);
module.exports = router;