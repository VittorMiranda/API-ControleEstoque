'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */ 
    await queryInterface.createTable('pessoa_tel', { 
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      tipo:{
        type: Sequelize.STRING(30)
      },
      telefone:{
        type: Sequelize.STRING(15)
      }
     });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('pessoa_tel');
     
  }
};
