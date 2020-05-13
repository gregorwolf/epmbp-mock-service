var oSuppliers = require("./data/Suppliers.json");
var oProducts = require("./data/Products.json");

module.exports = db => {
  const { Products, Suppliers } = db.entities(
    'MockEPMProductManagementService'
  )

  DELETE.from(Products+'')
  INSERT.into(Products).entries(oProducts)
  DELETE.from(Suppliers+'')
  INSERT.into(Suppliers).entries(oSuppliers)
}
