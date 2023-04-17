//arquivo de conecção com o banco de dados
const Sequelize = require('sequelize');

const database = process.env.DATABASE;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;//mysqlserver.cnswr3a4oqq3.sa-east-1.rds.amazonaws.com
const dialect = process.env.DIALECT;


const connection = new Sequelize(database, username, password,{
    host,
    dialect
});

module.exports = connection;