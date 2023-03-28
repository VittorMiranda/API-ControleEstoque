'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */ 
    await queryInterface.createTable('pessoa_fisica', { 
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      cpf:{
        type: Sequelize.STRING(11)
      },
    genero:{
        type: Sequelize.STRING(10)
      }
     });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */ 
    await queryInterface.dropTable('pessoa_fisica');
  }
};
