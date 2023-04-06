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
        const { nome, email, cep, logradouro, num_end, bairro, cidade, uf, cnpj, cpf, genero, created_at, updated_at} = req.body;

        const [id, affectedRows] = await connection.query(`
            INSERT INTO cliente_fornecedor VALUES (
                DEFAULT,
                '${nome}',
                '${email}',
                '${cep}',
                '${logradouro}',
                '${num_end}',
                '${bairro}',
                '${cidade}',
                '${uf}',
                '${cnpj}',
                '${cpf}',
                '${genero}',
                now(),
                now()
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
        const { idPessoa, nome, email, cep, logradouro, num_end, bairro, cidade, uf, cnpj, cpf, genero, created_at, updated_at} = req.body;

        const [id, affectedRows] = await connection.query(`
        UPDATE cliente_fornecedor SET 
        nome='${nome}',
        email='${email}',
        cep='${cep}',
        logradouro='${logradouro}',
        num_end='${num_end}',
        bairro='${bairro}',
        cidade='${cidade}',
        uf='${uf}',
        cnpj='${cnpj}',
        cpf='${cpf}',
        genero='${genero}',
        updated_at=now()
         WHERE id='${idPessoa}';
        `)
        if(affectedRows > 0) {
            response.success = true
            
        }

        return res.json(response);
    },
//metodo de exclusão de dados
    async delete(req, res) {
        const response = {...responseModel}
        const {idPessoa} = req.body;

        const [id, affectedRows] = await connection.query(`
        DELETE FROM cliente_fornecedor WHERE id='${idPessoa}';
        `)
        if(affectedRows > 0) {
            response.success = true     
        }
        return res.json(response);
    },

    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query('SELECT * FROM cliente_fornecedor');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
    },
    //metodo que pega uma pessoa pelo nome
      async buscar(req, res) {
        try {
            const {nome} = req.body;
          const results = await connection.query(`SELECT * FROM cliente_fornecedor where nome='${nome}'`);
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
    }   
      
};