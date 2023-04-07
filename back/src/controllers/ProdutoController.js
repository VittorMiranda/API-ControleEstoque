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
            const { nome, marca, cod_barra, tamanho, 
                descricao, imagem, data_vencimento, qtd_estoque,
                qtd_min, preco_custo, preco_venda, valor_lucro,
                porcentagem_lucro} = req.body;

            const [id, affectedRows] = await connection.query(`
                INSERT INTO produto VALUES (
                    DEFAULT,
                    '${nome}',
                    '${marca}',
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
                    now()
                );
            `)
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
            const {idProduto, nome, marca, cod_barra, tamanho, 
                descricao, imagem, data_vencimento, qtd_estoque,
                qtd_min, preco_custo, preco_venda, valor_lucro,
                porcentagem_lucro} = req.body;

            const [id, affectedRows] = await connection.query(`
            UPDATE produto SET 
                    nome ='${nome}',
                    marca='${marca}',
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
                    updated_at=now()
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
            DELETE FROM categoria WHERE id='${idProduto}';
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
          const results = await connection.query('SELECT * FROM produto');
          res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },
      
      //metodo que pega apenas o nome selecionado
    async buscar(req, res) {
        try {
            const {nome} = req.body;
            const results = await connection.query(`SELECT * FROM produto where nome='${nome}'`);
            res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }

};