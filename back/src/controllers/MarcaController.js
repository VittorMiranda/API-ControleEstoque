//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection')

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
            const {marca} = req.body;

            await connection.query(`INSERT INTO marca VALUES ('${marca}');`);

            return res.json({success: true, message: 'Criado com sucesso'});
        }catch(error){
            res.status(400).json({ message: error.message });
        }
    },
    //metodo de alteração de dados
    async edit(req, res) {
        try{
            const {marca, nova_marca} = req.body;

            await connection.query(`UPDATE marca SET marca='${nova_marca}' WHERE marca='${marca}';`);

            return res.json({success: true, message: 'Alterado com sucesso'});
        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        try{
            const {marca} = req.body;

            await connection.query(`DELETE FROM marca WHERE marca='${marca}';`);

            return res.json({success: true, message: 'Criado com sucesso'});
            
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
      }
      
};