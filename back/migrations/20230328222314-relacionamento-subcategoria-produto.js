'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subcategoria_produto', { 
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      produto_id:{
        type: Sequelize.INTEGER,
        references:{model:'produto', key: 'id'},
        onDelete:'CASCADE',
        allowNull: true
      },
      subcategoria_id:{
        type: Sequelize.INTEGER,
        references:{model:'subcategoria', key: 'id'},
        onDelete:'CASCADE',
        allowNull: true
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('subcategoria_produto');
  }
};
