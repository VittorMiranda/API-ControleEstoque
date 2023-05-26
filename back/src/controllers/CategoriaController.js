//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection')

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
            const {categoria} = req.body;

            await connection.query('INSERT INTO categoria (categoria) VALUES (?)', {
                    replacements: [categoria],
                    type: connection.QueryTypes.INSERT,});

            return res.json({success: true, message: 'Criado com sucesso'});

        }catch(error){
            res.status(400).json({ message: error.message });
        }
    },
    //metodo de alteração de dados
    async edit(req, res) {
        try{
            const {categoria, nova_categoria} = req.body;

            await connection.query('UPDATE categoria SET categoria = ? WHERE categoria = ?', {
              replacements: [nova_categoria, categoria],
              type: connection.QueryTypes.UPDATE,});
            
            return res.json({success: true, message: 'Alterado com sucesso'});
        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        try{
            const {categoria} = req.body;

            await connection.query(`DELETE FROM categoria WHERE categoria=?;`,{
              replacements: [categoria],
              type: connection.QueryTypes.DELETE,});
            

            return res.json({success: true, message: 'Excluido com sucesso'});
        }catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
    
    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query('SELECT * FROM categoria');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
      
};