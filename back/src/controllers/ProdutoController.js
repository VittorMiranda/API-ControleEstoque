//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection');


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
            const { nome, cod_barra, tamanho, 
                descricao, imagem, data_vencimento, qtd_estoque,
                qtd_min, preco_custo, preco_venda, marca_id} = req.body;
            const valor_lucro = preco_venda - preco_custo;
            const porcentagem_lucro = (valor_lucro/preco_venda)*100;

            const [id, affectedRows] = await connection.query(`
                INSERT INTO produto VALUES (
                    DEFAULT,
                    '${nome}',
                    '${cod_barra}',
                    '${tamanho}',
                    '${descricao}',
                    '${imagem}',
                    '${data_vencimento}',
                    '${qtd_estoque}',
                    '${qtd_min}',
                    '${preco_custo}',
                    '${preco_venda}',
                    '${valor_lucro}',
                    '${porcentagem_lucro}',
                    now(),
                    now(),
                    '${marca_id}'
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

    //metodo de atualização das informacões existente no bd
    async edit(req, res) {
        try{
            const response = {...responseModel}
            const {idProduto, nome, cod_barra, tamanho, 
                descricao, imagem, data_vencimento, qtd_estoque,
                qtd_min, preco_custo, preco_venda, marca_id} = req.body;
            const valor_lucro = preco_venda - preco_custo;
            const porcentagem_lucro = (valor_lucro/preco_venda)*100;

            const [id, affectedRows] = await connection.query(`
            UPDATE produto SET 
                    nome ='${nome}',
                    cod_barra='${cod_barra}',
                    tamanho='${tamanho}',
                    descricao='${descricao}',
                    imagem='${imagem}',
                    data_vencimento='${data_vencimento}',
                    qtd_estoque='${qtd_estoque}',
                    qtd_min='${qtd_min}',
                    preco_custo='${preco_custo}',
                    preco_venda='${preco_venda}',
                    valor_lucro='${valor_lucro}',
                    porcentagem_lucro='${porcentagem_lucro}',
                    updated_at=now(),
                    marca_id='${marca_id}'
                    WHERE id='${idProduto}';
            `)
            if(affectedRows > 0) {
                response.success = true
                
            }

            return res.json(response);
        }catch(error){
         res.status(400).json({ message: error.message });
        }
    },
//metodo de exclusão de dados
    async delete(req, res) {
        try{
            const response = {...responseModel}
            const {idProduto} = req.body;
            const [id, affectedRows] = await connection.query(`
            DELETE FROM produto WHERE id='${idProduto}';
            `)
            if(affectedRows > 0) {
                response.success = true     
            }
            return res.json(response);
        }catch(error){
            res.status(400).json({ message: error.message });
        }
    },

    //metodo que pega todos os dados existentes no bd
    async mostrar(req, res) {
        try {
          const results = await connection.query('SELECT * FROM produto JOIN marca ON produto.marca_id = marca.marca_id');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },
      
      //metodo que pega apenas o nome selecionado
      async buscarNome(req, res) {
        try {
            const {nome} = req.body;
            const results = await connection.query(`SELECT * FROM produto JOIN marca ON produto.marca_id = marca.marca_id where nome='${nome}'`);
            res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },
      async buscarCodigoBarras(req, res) {
        try {
            const {cod_barra} = req.body;
            const results = await connection.query(`SELECT * FROM produto JOIN marca ON produto.marca_id = marca.marca_id where cod_barra='${cod_barra}'`);
            res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }

};