'use strict';
module.exports = function(sequelize, DataTypes) {
  var Media = sequelize.define('Media', {
    title: DataTypes.STRING,
    press_mentions: DataTypes.STRING,
    links:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Media;
};
