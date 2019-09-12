export default {
  "name": "users",
  "verbose": "Users",
  "pk": [
    "id"
  ],
  "actions": {
    "delete": true,
    "edit": true
  },
  "relations": {
    "manyToOne": {
      "posts": [{
        "fk": "id",
        "target": "id",
      }],
    },
  },
  "columns": [
    {
      "name": "id",
      "verbose": "id",
      "type": "int(11)",
      "allowNull": false,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true,
      "input": {
        "type": "number",
      },
    },
    {
      "name": "name",
      "verbose": "name",
      "type": "varchar(255)",
      "allowNull": true,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true,
      "input": {
        "type": "text",
      },
    },
    {
      "name": "email",
      "verbose": "email",
      "type": "varchar(255)",
      "allowNull": true,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true,
      "input": {
        "type": "email",
      },
    },
    {
      "name": "password",
      "verbose": "password",
      "type": "varchar(255)",
      "allowNull": true,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true,
      "input": {
        "type": "password",
      },
    },
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
