'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cases = sequelize.define('Cases', {
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    links: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Cases;
};
