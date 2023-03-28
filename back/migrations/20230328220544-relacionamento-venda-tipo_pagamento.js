'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tipo_pagamento', { 
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      tipo:{
        type: Sequelize.STRING(45), 
        allowNull: false
      },
      status:{
        type: Sequelize.STRING(30)
      } });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tipo_pagamento'); 
  }
};
