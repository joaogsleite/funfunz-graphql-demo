import Sequelize, { 
  Instance,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
} from 'sequelize'

import { User } from './user'
import { Tag } from './tag'

declare class Post extends Model {
  public id!: number
  public ownerId!: number
  public title!: String

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static getById(id: number): Promise<Post>

  public getUser: BelongsToGetAssociationMixin<User>;
  public setUser: BelongsToSetAssociationMixin<User, User['id']>;
  public createUser: BelongsToCreateAssociationMixin<User, User>;
}

export default Post
