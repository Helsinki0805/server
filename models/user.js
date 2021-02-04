'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email cannot be empty"
        }
      },
      unique: {
        args: true,
        msg: "Email has been used"
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password cannot be empty"
        },
        minLength(value) {
          if (value.length < 6) {
            throw new Error('Use 6 characters or more for your password')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};