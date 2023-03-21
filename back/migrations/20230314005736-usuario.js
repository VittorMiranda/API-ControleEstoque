//modelo da tabela usuario, criado no banco de dados deve ser 
//criado de forma automatica apartir do primeiro registro 
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("users", {
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
      },
      creted_at:{
        type: Sequelize.DATETIME
      },
      updated_at:{
        type: Sequelize.DATETIME
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("users");
  }
};
