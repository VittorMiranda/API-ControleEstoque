//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection')


const responseModel = { 
    success: false, 
    data: [],
    error: []
};

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
            const response = {...responseModel}
            const {idProduto, idCategoria} = req.body;

            const [id, affectedRows] = await connection.query(`
                INSERT INTO categoria_produto VALUES (
                    DEFAULT,
                    '${idProduto}',
                    '${idCategoria}'               
                );
            `);
            if(affectedRows > 0) {
                response.success = true    
            }

            return res.json(response);
        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    },
    //metodo de alteração de dados
    async edit(req, res) {
        try{
            const response = {...responseModel}
            const {idProduto, idCategoria, idCategoriaProduto } = req.body;

            const [id, affectedRows] = await connection.query(`
            UPDATE categoria_produto SET produto_id='${idProduto}',
            categoria_id='${idCategoria}'  
            WHERE id='${idCategoriaProduto}';
            `);
            if(affectedRows > 0) {
                response.success = true    
            }

            return res.json(response);
        }catch (error) {
            res.status(400).json({ message: error.message });
        }
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        try{
            const response = {...responseModel}
            const {idCategoriaProduto} = req.body;

            const [id, affectedRows] = await connection.query(`
            DELETE FROM categoria_produto WHERE id='${idCategoriaProduto}';
            `);
            if(affectedRows > 0) {
                response.success = true    
            }

            return res.json(response);
        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    },

    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query(`SELECT * FROM categoria_produto JOIN produto ON
          categoria_produto.produto_id = produto.id JOIN categoria ON categoria_produto.categoria_id = categoria.id`);
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },
      async filtroProdutoCategoria(req, res) {
        try {
            const {idProduto, idCategoria} = req.body;
            const results = await connection.query(`SELECT * FROM categoria_produto JOIN produto ON
             categoria_produto.produto_id = produto.id JOIN categoria ON categoria_produto.categoria_id = categoria.id where produto_id='${idProduto}' AND
             categoria_id='${idCategoria}'`);
            res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
};