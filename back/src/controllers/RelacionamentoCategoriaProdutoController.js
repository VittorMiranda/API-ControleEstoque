//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection')

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
           const {nome, categoria} = req.body;

            await connection.query(`
                INSERT INTO categoria_produto VALUES (
                    '${nome}',
                    '${categoria}'               
                );
            `);
            return res.json({success: true, message: 'Criado com sucesso'});
        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    },
    //metodo de alteração de dados
    async edit(req, res) {
        try{
            const {nome, nome_novo, categoria, nova_categoria} = req.body;

            await connection.query(`
            UPDATE categoria_produto SET produto_categoria_id='${nome_novo}',
            categoria_id='${nova_categoria}'  
            WHERE produto_categoria_id='${nome}' and categoria_id='${categoria}';
            `);
            return res.json({success: true, message: 'Criado com sucesso'});
        }catch (error) {
            res.status(400).json({ message: error.message });
        }
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        try{
            const {nome, idCategoria} = req.body;

            await connection.query(`
            DELETE FROM categoria_produto WHERE produto_categoria_id='${nome}' and categoria_id='${idCategoria}';
            `);
            return res.json({success: true, message: 'Criado com sucesso'});
        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    },

    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query(`SELECT * FROM categoria_produto JOIN produto ON
          categoria_produto.produto_categoria_id = produto.nome`);
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },
      async filtroProdutoCategoria(req, res) {
        try {
            const {nome, idCategoria} = req.body;
            const results = await connection.query(`SELECT * FROM categoria_produto JOIN produto ON
             categoria_produto.produto_categoria_id = produto.nome where produto_categoria_id='${idProduto}' AND
             categoria_id='${idCategoria}'`);
            res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
};