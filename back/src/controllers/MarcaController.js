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
            const {marca} = req.body;

            const [id, affectedRows] = await connection.query(`
                INSERT INTO marca VALUES (
                    DEFAULT,
                    '${marca}'               
                );
            `);
            if(affectedRows > 0) {
                response.success = true    
            }

            return res.json(response);
        }catch(error){
            res.status(400).json({ message: error.message });
        }
    },
    //metodo de alteração de dados
    async edit(req, res) {
        try{
            const response = {...responseModel}
            const {idMarca, marca} = req.body;

            const [id, affectedRows] = await connection.query(`
            UPDATE marca SET marca='${marca}'  
            WHERE id='${idMarca}';
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
            const {idMarca} = req.body;

            const [id, affectedRows] = await connection.query(`
            DELETE FROM marca WHERE id='${idMarca}';
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
          const results = await connection.query('SELECT * FROM marca');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
      
};