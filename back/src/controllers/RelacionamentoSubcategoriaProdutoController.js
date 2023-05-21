//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection')

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
            const {subcategoria, nome} = req.body;
                
            await connection.query('INSERT INTO subcategoria_produto (produto_subcategoria_id, subcategoria_id) VALUES(?, ?);', {
                replacements: [nome, subcategoria],
                type: connection.QueryTypes.INSERT,
              });
           
                return res.json({success: true, message: 'Cadastrado com sucesso'});
        }catch (error) {
            res.status(400).json({ success: false, message: error.message });
          }
    },
    //metodo de alteração de dados
    async edit(req, res) {
        try{
           const {nome, nome_novo, subcategoria, nova_subcategoria} = req.body;

            await connection.query(`UPDATE subcategoria_produto SET produto_subcategoria_id='${nome_novo}', 
            subcategoria_id='${nova_subcategoria}' WHERE produto_subcategoria_id='${nome}' and subcategoria_id='${subcategoria}';`);

            return res.json({success: true, message: 'Alterado com sucesso'});
        }catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        try{
            const {nome, subcategoria} = req.body;

            await connection.query(`
            DELETE FROM subcategoria_produto WHERE produto_subcategoria_id='${nome}' and subcategoria_id='${subcategoria}';`);
            return res.json({success: true, message: 'Excluido com sucesso'});
        }catch (error) {
            res.status(400).json({ success: false, message: error.message });
          }
    },

    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query(`SELECT * FROM subcategoria_produto JOIN produto ON
          subcategoria_produto.produto_subcategoria_id = produto.nome`);
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ success: false, message: error.message });
        }
    },
    async filtroProdutoSubcategoria(req, res) {
        try {
            const {nome, subcategoria} = req.body;
            const results = await connection.query(`SELECT * FROM subcategoria_produto JOIN produto ON
             subcategoria_produto.produto_subcategoria_id = produto.nome where produto_subcategoria_id='${nome}' AND subcategoria_id='${subcategoria}'`);
            res.json(results[0]);
        } catch (error) {
          res.status(400).json({ success: false, message: error.message });
        }
      }
};