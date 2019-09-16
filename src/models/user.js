import Sequelize, { Model } from 'sequelize'

import Post from './post'
import Role from './role'

export default class User extends Model {
  static init (sequelize) {
    const schema = {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    }
    const options = { tableName: 'users', sequelize }
    super.init(schema, options)
  }
  static associate () {
    const options1 = {
      sourceKey: 'id',
      foreignKey: 'ownerId',
      as: 'posts',
    }
    User.hasMany(Post, options1)
    const options2 = {
      through: 'userrole',
      foreignKey: 'userId',
      otherKey: 'roleId',
    }
    User.belongsToMany(Role, options2)
  }

  static getById (id) {
    const where = { id }
    return User.findOne({ where })
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    }
  }
}
