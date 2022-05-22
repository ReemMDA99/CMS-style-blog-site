// Create post model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}
// create fields/columns for Post model
Post.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        post_title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        post_content: {
          type: DataTypes.Text,
          allowNull: false,
          validate: {
            // post must be at least one character long
            len : [1]
          }
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id'
          }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;