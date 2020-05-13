using { SEPMRA_PROD_MAN } from './external/SEPMRA_PROD_MAN';

service MockEPMProductManagementService  @(path:'/SEPMRA_PROD_MAN') {
  @cds.persistence.skip:false
  @cds.persistence.table
  entity SEPMRA_C_PD_Supplier as projection on SEPMRA_PROD_MAN.SEPMRA_C_PD_Supplier;
}