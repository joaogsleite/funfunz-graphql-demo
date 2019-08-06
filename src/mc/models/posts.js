export default {
  "name": "posts",
  "verbose": "Posts",
  "pk": [
    "id"
  ],
  "actions": {
    "delete": true,
    "edit": true
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
      "editable": true
    },
    {
      "name": "title",
      "verbose": "title",
      "type": "varchar(255)",
      "allowNull": true,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true
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
      "editable": true
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
      "editable": true
    },
    {
      "name": "ownerId",
      "verbose": "ownerId",
      "type": "int(11)",
      "allowNull": true,
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
      }
    }
  ],
  "visible": true,
  "roles": [
    "all"
  ]
}
