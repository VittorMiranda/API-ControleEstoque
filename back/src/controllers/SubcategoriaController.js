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
        const response = {...responseModel}
        const {descricao} = req.body;

        const [id, affectedRows] = await connection.query(`
            INSERT INTO subcategoria VALUES (
                DEFAULT,
                '${descricao}'               
            );
        `);
        if(affectedRows > 0) {
            response.success = true    
        }

        return res.json(response);
    },
    //metodo de alteração de dados
    async edit(req, res) {
        const response = {...responseModel}
        const {idSubcategoria,descricao} = req.body;

        const [id, affectedRows] = await connection.query(`
        UPDATE subcategoria SET descricao='${descricao}'  
        WHERE id='${idSubcategoria}';
        `);
        if(affectedRows > 0) {
            response.success = true    
        }

        return res.json(response);
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        const response = {...responseModel}
        const {idSubcategoria} = req.body;

        const [id, affectedRows] = await connection.query(`
        DELETE FROM subcategoria WHERE id='${idSubcategoria}';
        `);
        if(affectedRows > 0) {
            response.success = true    
        }

        return res.json(response);
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