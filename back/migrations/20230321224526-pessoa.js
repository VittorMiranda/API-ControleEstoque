'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("pessoa",{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: true
      },
      cep:{
        type: Sequelize.CHAR(8),
        allowNull: true
      },
      estado_uf:{
        type: Sequelize.STRING,
        allowNull: true
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: true
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: true
      },
      logradouro:{
        type: Sequelize.STRING,
        allowNull: true
      },
      numero_endereco:{
        type: Sequelize.STRING,
        allowNull: true
      },
      idCliente:{
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: {
            tableName: 'pessoa_fisica',
          },
          key: 'id'
        },
        allowNull:false
      },
      idFornecedor:{
        type: Sequelize.INTEGER, 
        references: {
          model: {
            tableName: 'pessoa_juridica',
          },
          key: 'id'
        },
        allowNull:false
      }


    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("pessoa")
  }
};
