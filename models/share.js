'use strict';
module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('Share', {
  }, {});

  Share.associate = function(models) {
    // associations can be defined here
    models.Share.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Share.belongsTo(models.Message, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
};
  return Share;
};