'use strict' 

module.exports = (sequelize, DataTypes) => {

  let Usuario = sequelize.define('usuario', { 
    id: {
      type: DataTypes.BIGINT, 
      autoIncrement: true, 
      primaryKey: true, 
      allowNull: false
    },
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
    },
    edad: {
      type: DataTypes.INTEGER,
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

  Usuario.associate = models => {
    Usuario.hasMany(models.archivo_usuario)
  }

  return Usuario
}

