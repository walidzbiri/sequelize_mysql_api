'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    contenu: DataTypes.STRING
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
    models.Message.hasMany(models.Comment);
    models.Message.hasMany(models.Like);
    models.Message.hasMany(models.Share);
    models.Message.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Message;
};