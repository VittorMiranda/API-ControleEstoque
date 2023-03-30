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
        const {descricao} = req.body;

        const [id, affectedRows] = await connection.query(`
            INSERT INTO categoria VALUES (
                DEFAULT,
                '${descricao}'               
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
        const {idCategoria,descricao} = req.body;

        const [id, affectedRows] = await connection.query(`
        UPDATE categoria SET descricao='${descricao}'  
        WHERE id='${idCategoria}';
        `);
        if(affectedRows > 0) {
            response.success = true    
        }

        return res.json(response);
    }, 
    //metodo de ddeletar dados
    async delete(req, res) {
        const response = {...responseModel}
        const {idCategoria} = req.body;

        const [id, affectedRows] = await connection.query(`
        DELETE FROM categoria WHERE id='${idCategoria}';
        `);
        if(affectedRows > 0) {
            response.success = true    
        }

        return res.json(response);
    } 
};