'use strict';
module.exports = function(sequelize, DataTypes) {
  var Media = sequelize.define('Media', {
    image: DataTypes.STRING,
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
