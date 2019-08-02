import Bluebird from 'bluebird'
import knex from 'knex'

export default {
  name: 'users',
  verbose: 'Users',
  pk: ['id'],
  actions: {
    delete: true,
    edit: true,
  },
  searchFields: [
    'name',
  ],
  itemTitle: 'name',
  chips: [],
  relations: {},
  columns: [
    {
      name: 'id',
      verbose: 'id',
      type: 'int(11)',
      input: {
        type: 'number',
      },
      allowNull: false,
      visible: {
        main: false,
        detail: false,
      },
      editable: false,
    },
    {
      name: 'name',
      verbose: 'Name',
      type: 'varchar(255)',
      input: {
        type: 'text',
      },
      allowNull: false,
      visible: {
        main: true,
        detail: true,
      },
      editable: true,
    },
    {
      name: 'createdAt',
      verbose: 'createdAt',
      type: 'datetime',
      input: {
        type: 'date',
      },
      allowNull: false,
      visible: {
        main: false,
        detail: false,
      },
      editable: true,
    },
    {
      name: 'updatedAt',
      verbose: 'updatedAt',
      type: 'datetime',
      input: {
        type: 'date',
      },
      allowNull: false,
      visible: {
        main: false,
        detail: false,
      },
      editable: true,
    },
  ],
  visible: true,
}
