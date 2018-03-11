'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cases = sequelize.define('Cases', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    links: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Cases;
};
