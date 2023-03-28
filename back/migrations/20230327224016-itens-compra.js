'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('itens_compra', {
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      quantidade:{
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      valor_unitario:{
        type: Sequelize.DECIMAL(9,2),
      },
      total_item:{
        type: Sequelize.DECIMAL(9,2),
      }
     });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('itens_compra');
     
  }
};
