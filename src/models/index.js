// database instance
import database from 'setup/mysql'


// import models
import UserModel from './user'
import PostModel from './post'
import TagModel from './tag'
import RoleModel from './role'

// logger
import logger from 'utils/logger'
const log = logger('models')


// init models
log('init start')
UserModel.init(database)
PostModel.init(database)
TagModel.init(database)
RoleModel.init(database)
log('init end')


// export models
export const User = UserModel
export const Post = PostModel
export const Tag = TagModel
export const Role = RoleModel


// associate models
log('associate start')
UserModel.associate()
PostModel.associate()
TagModel.associate()
RoleModel.associate()
log('associate end')
