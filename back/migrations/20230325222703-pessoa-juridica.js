'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */ await queryInterface.createTable('pessoa_juridica', { 
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
    cnpj:{
        type: Sequelize.STRING(18), 
      },
    razao_social:{
        type: Sequelize.STRING(50),
        allowNull: false
      },
    nome_fantasia:{
        type: Sequelize.STRING(30),
      },
    nome_fantasia:{
        type: Sequelize.STRING(30),
      },
    inscricao_municipal:{
        type: Sequelize.CHAR(9),
      },
      inscricao_estadual:{
        type: Sequelize.CHAR(9),
      } });
     
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */ await queryInterface.dropTable('pessoa_juridica');
     
  }
};
