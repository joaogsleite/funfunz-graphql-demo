import funfunzMC from 'funfunzmc'

import settings from '../mc'

const {
  DB_NAME,
  DB_USER = 'root',
  DB_PASS,
  DB_HOST = '127.0.0.1',
  DB_PORT = 3306,
  DB_SSL = false
} = process.env

const instance = funfunzMC({
  config: {
    mysql: {
      host: DB_HOST,
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASS,
      port: DB_PORT,
      ssl: DB_SSL ? {} : false,
    },
    server: {
      port: 3004,
    },
  },
  settings,
  plugin: true,
  defaultInterface: false,
})

export default instance
