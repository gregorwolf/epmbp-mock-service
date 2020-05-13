using { EPM_REF_APPS_PROD_MAN_SRV } from './external/EPM_REF_APPS_PROD_MAN_SRV';

service MockEPMProductManagementService  @(path:'/EPM_REF_APPS_PROD_MAN_SRV') {
  @cds.persistence.skip:false
  @cds.persistence.table
  entity Suppliers as projection on EPM_REF_APPS_PROD_MAN_SRV.Suppliers;
  @cds.persistence.skip:false
  @cds.persistence.table
  entity Products as projection on EPM_REF_APPS_PROD_MAN_SRV.Products;
}