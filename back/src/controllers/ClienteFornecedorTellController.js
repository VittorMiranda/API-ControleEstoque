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
        const {tipo, telefone, pessoa_id} = req.body;

        const [id, affectedRows] = await connection.query(`
            INSERT INTO cliente_fornecedor_tel VALUES (
                DEFAULT,
                '${tipo}',
                '${telefone}',
                '${pessoa_id}'               
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
        const {idPessoa_tel, tipo, telefone, pessoa_id} = req.body;

        const [id, affectedRows] = await connection.query(`
        UPDATE cliente_fornecedor_tel SET
         tipo='${tipo}', 
         telefone='${telefone}', 
         pessoa_id='${pessoa_id}'  
        WHERE id='${idPessoa_tel}';
        `);
        if(affectedRows > 0) {
            response.success = true    
        }

        return res.json(response);
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        const response = {...responseModel}
        const {idPessoa_tel} = req.body;

        const [id, affectedRows] = await connection.query(`
        DELETE FROM cliente_fornecedor_tel WHERE id='${idPessoa_tel}';
        `);
        if(affectedRows > 0) {
            response.success = true    
        }

        return res.json(response);
    },
    
    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query('SELECT * FROM cliente_fornecedor_tel');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
      
};