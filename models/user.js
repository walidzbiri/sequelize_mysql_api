'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Message);
    models.User.hasMany(models.Comment);
    models.User.hasMany(models.Like);
    models.User.hasMany(models.Share);
  };
  return User;
};