'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('venda', 'tipo_pagamendo_id', { 
      type: Sequelize.INTEGER,
      references:{model:'tipo_pagamento', key: 'id'},
      onDelete:'CASCADE',
      allowNull: false});
    
     
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('venda', 'tipo_pagamendo_id');
     
     
  }
};
