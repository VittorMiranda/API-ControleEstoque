//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection')

module.exports = {
    
    //metodo de incerção de dados
    async create(req, res) {
        try{
            const {subcategoria} = req.body;

            await connection.query('INSERT INTO subcategoria (subcategoria) VALUES (?)', {
                replacements: [subcategoria],
                type: connection.QueryTypes.INSERT,});
         
            return res.json({success: true, message: 'Criado com sucesso'});
        }catch (error) {
            res.status(400).json({ success: false, message: error.message });
          }
    },
    //metodo de alteração de dados
    async edit(req, res) {
        try{
            const {subcategoria, nova_subcategoria} = req.body;

            await connection.query('UPDATE subcategoria SET subcategoria = ? WHERE subcategoria = ?', {
                replacements: [nova_subcategoria, subcategoria],
                type: connection.QueryTypes.UPDATE,});
        

            return res.json({success: true, message: 'Alterado com sucesso'});
        }catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        try{
            const {subcategoria} = req.body;

            await connection.query(`DELETE FROM subcategoria WHERE subcategoria=?;`, {
                replacements: [subcategoria],
                type: connection.QueryTypes.DELETE,});
           
            return res.json({success: true, message: 'Excluido com sucesso'});
        }catch (error) {
            res.status(400).json({ success: false, message: error.message });
          }
    },

    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query('SELECT * FROM subcategoria');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ success: false, message: error.message });
        }
      }
};