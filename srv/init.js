var oSuppliers = require("./data/Suppliers.json");
var oProducts = require("./data/Products.json");

module.exports = db => {
  const { Products, Suppliers } = db.entities(
    'MockEPMProductManagementService'
  )
  return cds.run ([
    INSERT.into(Products).entries(oProducts),
    INSERT.into(Suppliers).entries(oSuppliers),
  ])
}
