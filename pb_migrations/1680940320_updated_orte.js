migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wpbyfkps2vwz2qg")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wpbyfkps2vwz2qg")

  collection.listRule = null

  return dao.saveCollection(collection)
})
