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
    validate: {
      notNull: {
        msg: 'El campo "nombre" es obligatorio.',
      },
      len: {
        args: [1, 255], // Longitud mínima y máxima permitida para el nombre
        msg: 'El campo "nombre" debe tener entre 1 y 255 caracteres.',
      },
      noEmptyString(value) {
        if (value.trim() === '') {
          throw new Error('El campo "nombre" no puede contener solo espacios en blanco.');
        }
      },
      
    },
  },

  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: {
        args: [1, 1000], // Longitud máxima permitida para la descripción
        msg: 'El campo "descripcion" no debe exceder los 1000 caracteres.',
      },
      noEmptyString(value) {
        if (value.trim() === '') {
          throw new Error('El campo "descripcion" no puede contener solo espacios en blanco.');
        }
      },
    },
  },

  direccion: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: {
        args: [1, 40], // Longitud máxima permitida para la descripción
        msg: 'El campo "direccion" no debe exceder los 40 caracteres.',
      },
      noEmptyString(value) {
        if (value.trim() === '') {
          throw new Error('El campo "direccion" no puede contener solo espacios en blanco.');
        }
      },
    },
  },

  precio: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    validate: {
      isDecimal: {
        msg: 'El campo "precio" debe ser un valor decimal válido.',
      },
      min: {
        args: [1],
        msg: 'El campo "precio" debe ser mayor o igual a uno.',
      },
    },
  },
});

