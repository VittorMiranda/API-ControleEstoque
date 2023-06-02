//controle relacionado a tabela usuario
//aqui se faz todos os comando SQL relacionadas a tabela users
const connection = require('../database/connection')

module.exports = {
    //metodo de incerção de dados
    async create(req, res) {
        try{
            const {email, username, password} = req.body;

            await connection.query(`INSERT INTO users (email, username, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?);`,{
                replacements: [email, username, password, new Date(), new Date()],
                type: connection.QueryTypes.INSERT,});
            
                return res.json({success: true, message: 'Criado com sucesso'});
        }catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    //metodo de verificação se usuario existe
    async login(req, res) {
        try{
            const { email, password } = req.body;

            const results = await connection.query(`SELECT username FROM users WHERE email=? AND password=? ORDER BY email DESC LIMIT 1;`,{
            replacements: [email, password],
            type: connection.QueryTypes.SELECT,});

            res.json({success: true, message: 'Usuario encontrado'});          
        }catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
//metodo de atualização das informacões existente no bd
    async edit(req, res) {
        try{
            const {email, username, password} = req.body;

            const [id, affectedRows] = await connection.query(`
            UPDATE users SET username=?, password=?, updated_at=? WHERE email=?;`, {
                replacements: [username, password, new Date(), email],
                type: connection.QueryTypes.UPDATE,});
           
                return res.json({success: true, message: 'Alterado com sucesso'});
        }catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
};