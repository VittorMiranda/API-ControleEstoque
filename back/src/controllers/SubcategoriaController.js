//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection');

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
            const response = {...responseModel}
            const {subcategoria} = req.body;

            const [id, affectedRows] = await connection.query(`
                INSERT INTO subcategoria VALUES (
                    DEFAULT,
                    '${subcategoria}'               
                );
            `);
            
            res.status(200).json({ message: "Cadastro realizado com sucesso" });

        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    },
    //metodo de alteração de dados
    async edit(req, res) {
        try{
            const response = {...responseModel}
            const {idSubcategoria,subcategoria} = req.body;

            const [id, affectedRows] = await connection.query(`
            UPDATE subcategoria SET subcategoria='${subcategoria}'  
            WHERE id='${idSubcategoria}';
            `);
           
            res.status(200).json({ message: "Alteração realizada com sucesso" });

        }catch (error) {
            res.status(400).json({ message: error.message });
        }
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        try{
            const response = {...responseModel}
            const {idSubcategoria} = req.body;

            const [id, affectedRows] = await connection.query(`
            DELETE FROM subcategoria WHERE id='${idSubcategoria}';
            `);

           res.status(200).json({ message: "Excluido com sucesso" });

        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    },

    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query('SELECT * FROM subcategoria');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
};