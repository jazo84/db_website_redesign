'use strict';
module.exports = function(sequelize, DataTypes) {
  var Blog = sequelize.define('Blog', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    archives:DataTypes.STRING,
    categories:DataTypes.STRING,
    author:DataTypes.STRING,
    date:DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Blog;
};
