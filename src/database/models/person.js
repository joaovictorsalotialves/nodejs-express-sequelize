'use strict';
const isCpfValid = require('../../utils/validateCpfHelper.js')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      })
      Person.hasMany(models.Matriculation, {
        foreignKey: 'student_id',
        scope: { status: 'matriculado' },
        as: 'coursesMatriculate'
      })
    }
  }
  Person.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: 'The name must be between 3 and 30 characters long'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfIsValid: (cpf) => {
          if (!isCpfValid(cpf)) throw new Error('Invalid CPF format')
        }
      }
    },
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'people',
    paranoid: true,
    defaultScope: {
      where: {
        active: true,
      }
    },
    scopes: {
      all: {
        where: {}
      }
    },
  });
  return Person;
};