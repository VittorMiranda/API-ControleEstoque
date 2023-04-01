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
        const { cnpj, razao_social, nome_fantasia, inscricao_municipal, inscricao_estadual, pessoa_id} = req.body;

        const [id, affectedRows] = await connection.query(`
            INSERT INTO pessoa_juridica VALUES (
                DEFAULT,
                '${cnpj}',
                '${razao_social}',
                '${nome_fantasia}',
                '${inscricao_municipal}',
                '${inscricao_estadual}',
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
        const {idPessoaJuridica, cnpj, razao_social, nome_fantasia, inscricao_municipal, inscricao_estadual, pessoa_id} = req.body;

        const [id, affectedRows] = await connection.query(`
        UPDATE pessoa_juridica SET 
        cnpj='${cnpj}',
        razao_social='${razao_social}',
        nome_fantasia='${nome_fantasia}',
        inscricao_municipal='${inscricao_municipal}',
        inscricao_estadual='${inscricao_estadual}',
        pessoa_id='${pessoa_id}'
        WHERE id='${idPessoaJuridica}';;
        `)
        if(affectedRows > 0) {
            response.success = true
            
        }

        return res.json(response);
    },
//metodo de exclusão de dados
    async delete(req, res) {
        const response = {...responseModel}
        const {idPessoaJuridica} = req.body;

        const [id, affectedRows] = await connection.query(`
        DELETE FROM pessoa_juridica WHERE id='${idPessoaJuridica}';
        `)
        if(affectedRows > 0) {
            response.success = true     
        }
        return res.json(response);
    },

    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query('SELECT * FROM pessoa_juridica');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }  

};