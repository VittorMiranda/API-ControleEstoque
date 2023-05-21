//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection')

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
           const {categoria, subcategoria} = req.body;

            await connection.query(`
                INSERT INTO categoria_subcategoria VALUES (
                    '${categoria}',
                    '${subcategoria}'              
                );
            `);
            return res.json({success: true, message: 'Criado com sucesso'});
        }catch (error) {
            res.status(400).json({success: false, message: error.message });
          }
    },
    //metodo de alteração de dados
    async edit(req, res) {
        try{
            const {categoria, nova_categoria, subcategoria, nova_subcategoria} = req.body;

            await connection.query(`
            UPDATE categoria_subcategoria SET categoria_id='${nova_categoria}',
            subcategoria_id='${nova_subcategoria}'  
            WHERE categoria_id='${categoria}' and subcategoria_id='${subcategoria}';
            `);
            return res.json({success: true, message: 'Alterado com sucesso'});
        }catch (error) {
            res.status(400).json({ message: error.message });
        }
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        try{
            const {categoria,subcategoria} = req.body;

            await connection.query(`DELETE FROM categoria_subcategoria WHERE categoria_id='${categoria}' and
             subcategoria_id='${subcategoria}';`);
            return res.json({success: true, message: 'Excluido com sucesso'});
        }catch (error) {
            res.status(400).json({ success: false, message: error.message });
          }
    },

    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query(`SELECT * FROM categoria_subcategoria`);
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ success: false, message: error.message });
        }
    },
    async filtro(req, res) {
        try {
          const {categoria, subcategoria} = req.body;
          const results = await connection.query(`SELECT * FROM categoria_subcategoria where categoria_id=${categoria} AND subcategoria_id=${subcategoria}`);
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ success: false, message: error.message });
        }
    }
};