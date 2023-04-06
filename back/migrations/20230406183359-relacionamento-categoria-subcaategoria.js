'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categoria_subcategoria', { 
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      categoria_id:{
        type: Sequelize.INTEGER,
        references:{model:'categoria', key: 'id'},
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
     await queryInterface.dropTable('categoria_subcategoria');
     
  }
};
