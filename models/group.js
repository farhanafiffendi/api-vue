'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      group.belongsTo(models.newuser, {
        as: 'pertama',
        foreignKey: {
          name: 'anggotapertama'
        }
      });
      group.belongsTo(models.newuser, {
        as: 'kedua',
        foreignKey: {
          name: 'anggotakedua'
        }
      });
    }
  }
  group.init({
    grupname: DataTypes.STRING,
    anggotapertama: DataTypes.INTEGER,
    anggotakedua: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'group',
  });
  return group;
};