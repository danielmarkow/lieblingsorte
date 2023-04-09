migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("owh2p0dd17javt8");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "owh2p0dd17javt8",
    "created": "2023-04-08 07:45:53.945Z",
    "updated": "2023-04-08 07:46:38.847Z",
    "name": "orte",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xoqeryk0",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "iaeoi49p",
        "name": "longitude",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "8kjaohhu",
        "name": "latitude",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "omphably",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "hymalrqq",
        "name": "lastVisited",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": false,
      "allowUsernameAuth": false,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
