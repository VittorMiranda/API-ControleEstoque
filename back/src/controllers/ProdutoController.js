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
        const { nome, marca, cod_barra, tamanho, 
            descricao, imagem, data_vencimento, qtd_estoque,
            qtd_min, preco_custo, preco_venda, valor_lucro,
            porcentagem_lucro, categoria_id, subcategoria_id} = req.body;

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
                now(),
                '${categoria_id}',
                '${subcategoria_id}'
            );
        `)
        if(affectedRows > 0) {
            response.success = true
            
        }

        return res.json(response);
    },
    async edit(req, res) {
        const response = {...responseModel}
        const {idProduto, nome, marca, cod_barra, tamanho, 
            descricao, imagem, data_vencimento, qtd_estoque,
            qtd_min, preco_custo, preco_venda, valor_lucro,
            porcentagem_lucro, categoria_id, subcategoria_id} = req.body;

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
                updated_at=now(),
                categoria_id='${categoria_id}',
                subcategoria_id='${subcategoria_id}'
                WHERE id='${idProduto}';
        `)
        if(affectedRows > 0) {
            response.success = true
            
        }

        return res.json(response);
    },

    async delete(req, res) {
        const response = {...responseModel}
        const {idProduto} = req.body;

        const [id, affectedRows] = await connection.query(`
        DELETE FROM categoria WHERE id='${idProduto}';
        `)
        if(affectedRows > 0) {
            response.success = true     
        }
        return res.json(response);
    },

    async select(req, res) {
        const response = {...responseModel}
        const {idProduto} = req.body;

        const [id, affectedRows] = await connection.query(`
        SELECT * FROM produto;
        `)
        if(affectedRows > 0) {
            response.success = true     
        }
        return res.json(response);
    },
    


};