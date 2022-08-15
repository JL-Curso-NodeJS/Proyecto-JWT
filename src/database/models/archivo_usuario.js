'use strict'

module.exports = (sequelize, DataTypes) => {

  let ArchivoUsuario = sequelize.define('archivo_usuario', { 
    id: {
      type: DataTypes.BIGINT, 
      autoIncrement: true, 
      primaryKey: true, 
      allowNull: false 
    },
    nombre: {  
      type: DataTypes.STRING,
      allowNull: true,
    },
    file: {
      type: DataTypes.STRING,
      allowNull: true
    },
    original_name: {  
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: { 
      type: DataTypes.DATE, 
      field: 'created_at', 
      defaultValue: DataTypes.NOW,
      allowNull: false 
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: { 
      type: DataTypes.DATE, 
      field: 'deleted_at' 
    }
  }, {
    paranoid: true, 
    freezeTableName: true, 
  })

  ArchivoUsuario.associate = models => {
    ArchivoUsuario.belongsTo(models.usuario) 
  }

  return ArchivoUsuario
}

