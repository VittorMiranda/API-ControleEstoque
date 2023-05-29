//permite o acesso dos metodos dos controulers
const router = require('express').Router();


//import controllers
const UserCeontroller = require('./controllers/UserController');
const ProdutoController = require('./controllers/ProdutoController');
const CategoriaController = require('./controllers/CategoriaController');
const SubcategoriaController = require('./controllers/SubcategoriaController');
const ClienteFornecedorController = require('./controllers/ClienteFornecedorController');
const RelacionamentoCategoriaSubcategoriaController = require('./controllers/RelacionamentoCategoriaSubcategoriaController');
const RelacionamentoCategoriaProdutoController = require('./controllers/RelacionamentoCategoriaProdutoController');
const RelacionamentoSubcategoriaProdutoController = require('./controllers/RelacionamentoSubcategoriaProdutoController');
const MarcaController = require('./controllers/MarcaController');
//permite que a api fique publica para ser acessada pelas aplicações
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})
//rotas da tabela users
router.post('/User/create', UserCeontroller.create);
router.get('/User/login', UserCeontroller.login);
router.put('/User/edit', UserCeontroller.edit);

//rotas produto
router.post('/Produto/create', ProdutoController.create);
router.put('/Produto/edit', ProdutoController.edit);
router.delete('/Produto/delete', ProdutoController.delete);
router.get('/Produto/mostrar', ProdutoController.mostrar);
router.get('/Produto/buscar/nome', ProdutoController.buscarNome);
router.get('/Produto/buscar/codigo_barra', ProdutoController.buscarCodigoBarras);
router.get('/Produto/buscar/marca', ProdutoController.buscarMarca);
router.get('/Produto/buscar/ProximoVencimento', ProdutoController.buscarProxVencimentos);
router.get('/Produto/buscar/vencidos', ProdutoController.buscarVencidos);
router.get('/Produto/quantidade', ProdutoController.quantidadeProdutos);
router.get('/Produto/quantidade/ProximoVencimento', ProdutoController.quantidadeProxVencimento);

//rotas categoria
router.post('/Categoria/create', CategoriaController.create);
router.put('/Categoria/edit', CategoriaController.edit);
router.delete('/Categoria/delete', CategoriaController.delete);
router.get('/Categoria/mostrar', CategoriaController.mostrar);

//rotas marca
router.post('/Marca/create', MarcaController.create);
router.put('/Marca/edit', MarcaController.edit);
router.delete('/Marca/delete', MarcaController.delete);
router.get('/Marca/mostrar', MarcaController.mostrar);
router.get('/Marca/quantidade', MarcaController.quantidadeMarca);

//rotas subcategoria
router.post('/Subcategoria/create', SubcategoriaController.create);
router.put('/Subcategoria/edit', SubcategoriaController.edit);
router.delete('/Subcategoria/delete', SubcategoriaController.delete);
router.get('/Subcategoria/mostrar', SubcategoriaController.mostrar);

//rotas cliente_fornecedor
router.post('/ClienteFornecedor/create', ClienteFornecedorController.create);
router.put('/ClienteFornecedor/edit', ClienteFornecedorController.edit);
router.delete('/ClienteFornecedor/delete', ClienteFornecedorController.delete);
router.get('/ClienteFornecedor/mostrar', ClienteFornecedorController.mostrar);
router.get('/ClienteFornecedor/buscar', ClienteFornecedorController.buscar);

//rotas categoria_subcategoria
router.post('/RelacionamentoCategoriaSubcategoria/create', RelacionamentoCategoriaSubcategoriaController.create);
router.put('/RelacionamentoCategoriaSubcategoria/edit', RelacionamentoCategoriaSubcategoriaController.edit);
router.delete('/RelacionamentoCategoriaSubcategoria/delete', RelacionamentoCategoriaSubcategoriaController.delete);
router.get('/RelacionamentoCategoriaSubcategoria/mostrar', RelacionamentoCategoriaSubcategoriaController.mostrar);
router.get('/RelacionamentoCategoriaSubcategoria/filtro', RelacionamentoCategoriaSubcategoriaController.filtro);

//rotas categoria_produto
router.post('/RelacionamentoCategoriaProduto/create', RelacionamentoCategoriaProdutoController.create);
router.put('/RelacionamentoCategoriaProduto/edit', RelacionamentoCategoriaProdutoController.edit);
router.delete('/RelacionamentoCategoriaProduto/delete', RelacionamentoCategoriaProdutoController.delete);
router.get('/RelacionamentoCategoriaProduto/mostrar', RelacionamentoCategoriaProdutoController.mostrar);
router.get('/RelacionamentoCategoriaProduto/filtro', RelacionamentoCategoriaProdutoController.filtroProdutoCategoria);

//rotas subcategoria_produto
router.post('/RelacionamentoSubcategoriaProduto/create', RelacionamentoSubcategoriaProdutoController.create);
router.put('/RelacionamentoSubcategoriaProduto/edit', RelacionamentoSubcategoriaProdutoController.edit);
router.delete('/RelacionamentoSubcategoriaProduto/delete', RelacionamentoSubcategoriaProdutoController.delete);
router.get('/RelacionamentoSubcategoriaProduto/mostrar', RelacionamentoSubcategoriaProdutoController.mostrar);
router.get('/RelacionamentoSubcategoriaProduto/filtro', RelacionamentoSubcategoriaProdutoController.filtroProdutoSubcategoria);


module.exports = router;