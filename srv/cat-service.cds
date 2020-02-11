using ZEPM_BP_SRV as EPM_BP_API from './external/csn/ZEPM_BP_SRV.json';

service ZEPM_BP_SRV @(path: '/sap/opu/odata/sap/ZEPM_BP_SRV') {
	@cds.persistence.skip:false
	@cds.persistence.table
  entity EPMBusinessPartnerSet as projection on EPM_BP_API.EPMBusinessPartner;
}
