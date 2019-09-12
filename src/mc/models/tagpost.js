export default {
  "name": "tagpost",
  "verbose": "Tagposts",
  "pk": [
    "postId",
    "tagId"
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
      "name": "postId",
      "verbose": "postId",
      "type": "int(11)",
      "allowNull": false,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true,
      "relation": {
        "type": "oneToMany",
        "table": "posts",
        "key": "id",
        "display": "id"
      },
      "input": {
        "type": "relation",
      },
    },
    {
      "name": "tagId",
      "verbose": "tagId",
      "type": "int(11)",
      "allowNull": false,
      "visible": {
        "main": true,
        "detail": true
      },
      "editable": true,
      "relation": {
        "type": "oneToMany",
        "table": "tags",
        "key": "id",
        "display": "id"
      },
      "input": {
        "type": "relation",
      },
    }
  ],
  "visible": true,
  "roles": [
    "all"
  ]
}
