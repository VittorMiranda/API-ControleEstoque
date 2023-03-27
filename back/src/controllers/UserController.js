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
        const { username, password } = req.body;

        const [id, affectedRows] = await connection.query(`
            INSERT INTO users VALUES (
                DEFAULT,
                '${username}',
                '${password}',
                now(),
                now()               
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