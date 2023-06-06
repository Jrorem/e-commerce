const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      type: DataTypes.Integer,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    product_id:{
      type: DataTypes.Integer,
      references:{
        model: 'product',
        key: 'id'
      },
    },
    tag_id:{
      type:DataTypes.Integer,
      references:{
        model: 'Tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

Product.hasMany(Tag);
Tag.hasMany(Product);

module.exports = ProductTag;
