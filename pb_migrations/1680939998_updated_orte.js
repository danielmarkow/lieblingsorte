migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh2p0dd17javt8")

  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": false,
    "allowUsernameAuth": false,
    "exceptEmailDomains": null,
    "manageRule": null,
    "minPasswordLength": 8,
    "onlyEmailDomains": null,
    "requireEmail": false
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh2p0dd17javt8")

  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": true,
    "allowUsernameAuth": true,
    "exceptEmailDomains": null,
    "manageRule": null,
    "minPasswordLength": 8,
    "onlyEmailDomains": null,
    "requireEmail": false
  }

  return dao.saveCollection(collection)
})
