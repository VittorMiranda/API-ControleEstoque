//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection');

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
            const { nome, cod_barra, tamanho, 
                descricao, imagem_link, imagem_blob, data_vencimento, qtd_estoque,
                qtd_min, preco_custo, preco_venda, marca_id} = req.body;
                const lucro = preco_venda - preco_custo;
                const valor_lucro = lucro.toFixed(2)
                const porcentagem = (valor_lucro/preco_venda)*100;
                const porcentagem_lucro = porcentagem.toFixed(2)

            await connection.query(`
                INSERT INTO produto VALUES (
                    '${nome}',
                    '${cod_barra}',
                    '${tamanho}',
                    '${descricao}',
                    '${imagem_link}',
                    '${imagem_blob}',
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
            return res.json({success: true, message: 'Criado com sucesso'});
        }catch(error){
            res.status(400).json({ message: error.message });
        }
    },

    //metodo de atualização das informacões existente no bd
    async edit(req, res) {
        try{
                const {nome, nome_novo, cod_barra, tamanho, 
                descricao, imagem_link, imagem_blob, data_vencimento, qtd_estoque,
                qtd_min, preco_custo, preco_venda, marca_id} = req.body;
                const lucro = preco_venda - preco_custo;
                const valor_lucro = lucro.toFixed(2)
                const porcentagem = (valor_lucro/preco_venda)*100;
                const porcentagem_lucro = porcentagem.toFixed(2)

            await connection.query(`
            UPDATE produto SET 
                    nome ='${nome_novo}',
                    cod_barra='${cod_barra}',
                    tamanho='${tamanho}',
                    descricao='${descricao}',
                    imagem_link='${imagem_link}',
                    imagem_blob='${imagem_blob}',
                    data_vencimento='${data_vencimento}',
                    qtd_estoque='${qtd_estoque}',
                    qtd_min='${qtd_min}',
                    preco_custo='${preco_custo}',
                    preco_venda='${preco_venda}',
                    valor_lucro='${valor_lucro}',
                    porcentagem_lucro='${porcentagem_lucro}',
                    updated_at=now(),
                    marca_id='${marca_id}'
                    WHERE nome='${nome}';
            `);
            return res.json({success: true, message: 'Alterado com sucesso'});
        }catch(error){
         res.status(400).json({ message: error.message });
        }
    },
//metodo de exclusão de dados
    async delete(req, res) {
        try{
            const {nome} = req.body;
            await connection.query(`
            DELETE FROM produto WHERE nome='${nome}';
            `)
            return res.json({success: true, message: 'Deletado com sucesso'});
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
      async buscarNome(req, res) {
        try {
            const {nome} = req.body;
            const results = await connection.query(`SELECT * FROM produto where nome='${nome}'`);
            res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      },
      async buscarCodigoBarras(req, res) {
        try {
            const {cod_barra} = req.body;
            const results = await connection.query(`SELECT * FROM produto where cod_barra='${cod_barra}'`);
            res.json(results[0]);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }

};