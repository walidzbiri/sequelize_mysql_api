'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    contenu: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    models.Comment.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Comment.belongsTo(models.Message, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Comment;
};