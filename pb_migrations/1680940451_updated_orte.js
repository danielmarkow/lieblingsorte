migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wpbyfkps2vwz2qg")

  collection.deleteRule = "@request.auth.id != \"\" && createdBy = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wpbyfkps2vwz2qg")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
