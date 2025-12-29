'use strict';
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
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
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
    }
  });
  return Person;
};