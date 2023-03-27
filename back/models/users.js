const Sequelize = require('sequelize');
const database = require('../src/database/connection');

const Users = database.define('users',{
    id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      username:{
        type: Sequelize.STRING, 
        allowNull: false
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      }
},{
    timestamps:true
});

module.exports = Users;