'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    models.Like.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Like.belongsTo(models.Message, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Like;
};