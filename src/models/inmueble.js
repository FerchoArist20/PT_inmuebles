// models/Item.js
import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'


export const inmueble = sequelize.define('inmuebles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  
});

