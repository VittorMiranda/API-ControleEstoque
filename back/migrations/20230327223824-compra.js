'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('compra', {
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      nota_fiscal:{
        type: Sequelize.STRING(100)
      },
      data:{
        type: Sequelize.DATE  
      },
      total:{
        type: Sequelize.DECIMAL(9,2)  
      },
      status:{
        type: Sequelize.STRING(45)  
      }
     });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('compra');
     
  }
};
