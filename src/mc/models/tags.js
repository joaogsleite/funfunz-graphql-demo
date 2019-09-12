export default {
  "name": "tags",
  "verbose": "Tags",
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
        "verbose": "Posts",
        "relationTable": "tagpost",
        "foreignKey": "tagId",
        "localId": "id",
        "remoteTable": "posts",
        "remoteForeignKey": "postId",
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
