//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection')

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
            const {marca} = req.body;

            await connection.query('INSERT INTO marca (marca) VALUES (?)', {
              replacements: [marca],
              type: connection.QueryTypes.INSERT,});

            return res.json({success: true, message: 'Criado com sucesso'});
        }catch(error){
            res.status(400).json({ message: error.message });
        }
    },
    //metodo de alteração de dados
    async edit(req, res) {
        try{
            const {marca, nova_marca} = req.body;

            await connection.query(`UPDATE marca SET marca=? WHERE marca=?;`, {
              replacements: [nova_marca, marca],
              type: connection.QueryTypes.UPDATE,});

            return res.json({success: true, message: 'Alterado com sucesso'});
        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        try{
            const {marca} = req.body;

            await connection.query(`DELETE FROM marca WHERE marca=?;`, {
              replacements: [marca],
              type: connection.QueryTypes.DELETE,});

            return res.json({success: true, message: 'Excluido com sucesso'});
            
        }catch (error) {
        res.status(400).json({ message: error.message });
      }
    },
    
    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query('SELECT * FROM marca');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },

      //método que conta a quantidade de marcas cadastradas
      async quantidadeMarca(req, res) {
        try {
            const results = await connection.query('SELECT COUNT(*) AS quantidade_marca FROM marca;');
            res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
    }
      
};