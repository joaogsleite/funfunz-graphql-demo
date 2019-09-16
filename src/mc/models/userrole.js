export default {
  "name": "userrole",
  "verbose": "Userrole",
  "pk": [
    "userId",
    "roleId"
  ],
  "actions": {
    "delete": true,
    "edit": true
  },
  "columns": [
    {
      "name": "createdAt",
      "verbose": "createdAt",
      "type": "datetime",
      "allowNull": false,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true,
      "input": {
        "type": "date",
      },
    },
    {
      "name": "updatedAt",
      "verbose": "updatedAt",
      "type": "datetime",
      "allowNull": false,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true,
      "input": {
        "type": "date",
      },
    },
    {
      "name": "userId",
      "verbose": "userId",
      "type": "int(11)",
      "allowNull": false,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true,
      "relation": {
        "type": "oneToMany",
        "table": "users",
        "key": "id",
        "display": "id"
      },
      "input": {
        "type": "relation",
      },
    },
    {
      "name": "roleId",
      "verbose": "roleId",
      "type": "int(11)",
      "allowNull": false,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true,
      "relation": {
        "type": "oneToMany",
        "table": "roles",
        "key": "id",
        "display": "id"
      },
      "input": {
        "type": "relation",
      },
    }
  ],
  "visible": true,
  "roles": {
    "read": [
      'all',
    ],
    "write": [
      'all',
    ],
  },
}
