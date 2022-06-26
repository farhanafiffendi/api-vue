'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class newuser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      newuser.hasOne(models.group, {
        as: 'pertama',
        foreignKey: {
          name: 'anggotapertama'
        }
      });
      newuser.hasOne(models.group, {
        as: 'kedua',
        foreignKey: {
          name: 'anggotakedua'
        }
      });
    }
  }
  newuser.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'newuser',
  });
  return newuser;
};