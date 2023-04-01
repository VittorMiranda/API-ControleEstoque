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
        const { cpf, genero, pessoa_id} = req.body;

        const [id, affectedRows] = await connection.query(`
            INSERT INTO pessoa_fisica VALUES (
                DEFAULT,
                '${cpf}',
                '${genero}',
                '${pessoa_id}'
            );
        `)
        if(affectedRows > 0) {
            response.success = true
            
        }

        return res.json(response);
    },

    //metodo de atualização das informacões existente no bd
    async edit(req, res) {
        const response = {...responseModel}
        const {idPessoaFisica, cpf, genero, pessoa_id} = req.body;

        const [id, affectedRows] = await connection.query(`
        UPDATE pessoa_fisica SET 
        cpf='${cpf}',
        genero='${genero}',
        pessoa_id='${pessoa_id}'
        WHERE id='${idPessoaFisica}';
        `)
        if(affectedRows > 0) {
            response.success = true
            
        }

        return res.json(response);
    },
//metodo de exclusão de dados
    async delete(req, res) {
        const response = {...responseModel}
        const {idPessoaFisica} = req.body;

        const [id, affectedRows] = await connection.query(`
        DELETE FROM pessoa_fisica WHERE id='${idPessoaFisica}';
        `)
        if(affectedRows > 0) {
            response.success = true     
        }
        return res.json(response);
    },

    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query('SELECT * FROM pessoa_fisica');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }  

};