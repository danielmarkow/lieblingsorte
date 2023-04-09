migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wpbyfkps2vwz2qg")

  // remove
  collection.schema.removeField("ykxvm1x4")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wpbyfkps2vwz2qg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykxvm1x4",
    "name": "field",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
