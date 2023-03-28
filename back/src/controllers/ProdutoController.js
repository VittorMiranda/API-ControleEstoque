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

    //metodo de verificação se usuario existe
    async login(req, res) {
        const response = {...responseModel}
        const { username, password } = req.body;

        const [, data] = await connection.query(`
            SELECT * FROM users
            WHERE username='${username}' AND password='${password}'
            ORDER BY id DESC LIMIT 1
        `)

        if(data.length > 0) {
            response.success = true
           console.log('exist')
        }


        return res.json(response);
    }
};