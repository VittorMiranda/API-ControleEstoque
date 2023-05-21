'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categoria_subcategoria', { 
        categoria_id:{
        type: Sequelize.STRING(30),
        references:{model:'categoria', key: 'categoria'},
        onDelete:'CASCADE',
        primaryKey: true,
        allowNull: true
      },
      subcategoria_id:{
        type: Sequelize.STRING(30),
        references:{model:'subcategoria', key: 'subcategoria'},
        onDelete:'CASCADE',
        primaryKey: true,
        allowNull: true
      }
     });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('categoria_subcategoria');
     
  }
};
