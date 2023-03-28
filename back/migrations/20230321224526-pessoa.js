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
    await queryInterface.createTable("pessoa",{
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      nome:{
        type: Sequelize.STRING(50), 
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(40)   
      },
      cep:{
        type: Sequelize.CHAR(8)   
      },
      logradouro:{
        type: Sequelize.STRING(40)   
      },
      num_end:{
        type: Sequelize.STRING(10)   
      },
      bairro:{
        type: Sequelize.STRING(30)   
      },
      cidade:{
        type: Sequelize.STRING(40)   
      },
      uf:{
        type: Sequelize.STRING(2)   
      },
      created_at:{
        type: Sequelize.DATE
      },
      updated_at:{
        type: Sequelize.DATE
      }
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("pessoa")
  }
};
