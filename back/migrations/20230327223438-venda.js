'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.createTable('venda', {
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
      desconto:{
        type: Sequelize.DECIMAL(9,2)  
      },
      valor_venda:{
        type: Sequelize.DECIMAL(9,2)  
      },
      status:{
        type: Sequelize.STRING(45)  
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
    /**
     * Add reverting commands here.
     *
     * Example:
     */
    await queryInterface.dropTable('venda');
     
  }
};
