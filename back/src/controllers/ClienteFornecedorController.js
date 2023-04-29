//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection');

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
            const response = {...responseModel}
            const { nome, email, cep, logradouro, num_end, bairro, cidade, uf, cnpj, cpf, genero, telefone_principal, telefone_secundario, telefone_recado} = req.body;

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
                    '${telefone_principal}',
                    '${telefone_secundario}',
                    '${telefone_recado}',
                    now(),
                    now()
                );
            `);

            res.status(200).json({ message: "Cadastro realizado com sucesso" });

        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    },

    //metodo de atualização das informacões existente no bd
    async edit(req, res) {
        try{
            const response = {...responseModel}
            const { idPessoa, nome, email, cep, logradouro, num_end, bairro, cidade, uf, cnpj, cpf, genero, telefone_principal, telefone_secundario, telefone_recado} = req.body;

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
            telefone_principal='${telefone_principal}',
            telefone_secundario='${telefone_secundario}',
            telefone_recado='${telefone_recado}',
            updated_at=now()
            WHERE id='${idPessoa}';
            `);

            res.status(200).json({ message: "Alteração realizada com sucesso" });

        }catch (error) {
            res.status(400).json({ message: error.message });
          }
    },
//metodo de exclusão de dados
    async delete(req, res) {
        try{
            const response = {...responseModel}
            const {idPessoa} = req.body;

            const [id, affectedRows] = await connection.query(`
            DELETE FROM cliente_fornecedor WHERE id='${idPessoa}';
            `)

            res.status(200).json({ message: "Excluido com sucesso" });

        }catch (error) {
            res.status(400).json({ message: error.message });
          }
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