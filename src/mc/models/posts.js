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
  "relations": {
    "manyToMany": [
      {
        "verbose": "Tags",
        "relationTable": "tagpost",
        "foreignKey": "postId",
        "localId": "id",
        "remoteTable": "tags",
        "remoteForeignKey": "tagId",
        "remoteId": "id"
      }
    ]
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
      "name": "title",
      "verbose": "title",
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
