var oSEPMRA_C_PD_Supplier = require("./SEPMRA_C_PD_Supplier.json");

module.exports = db => {
  const { SEPMRA_C_PD_Supplier } = db.entities(
    'MockEPMProductManagementService'
  )

  DELETE.from(SEPMRA_C_PD_Supplier+'')
  INSERT.into(SEPMRA_C_PD_Supplier).entries(oSEPMRA_C_PD_Supplier)
}
