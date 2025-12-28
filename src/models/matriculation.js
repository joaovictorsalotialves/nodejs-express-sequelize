'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculation extends Model {
    static associate(models) {
      Matriculation.belongsTo(models.Person, {
        foreignKey: 'student_id'
      })
      Matriculation.belongsTo(models.Course, {
        foreignKey: 'course_id'
      })
    }
  }
  Matriculation.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matriculation',
    tableName: 'matriculation',
  });
  return Matriculation;
};