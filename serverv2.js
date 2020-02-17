const odatav2proxy = require("@sap/cds-odata-v2-adapter-proxy")
const express = require("express")
const cds = require("@sap/cds")

const { PORT=3000 } = process.env
const app = express()

cds.serve("all").in(app)

cds.deploy('srv').to('sqlite::memory:',{primary:true}) .then (async db => {

	const { EPMBusinessPartnerSet: EPMBusinessPartner } = db.entities('ZEPM_BP_SRV')
	console.log('Adding sample data...')

	const epmbp = db.run (INSERT.into (EPMBusinessPartner+'') .entries (
		{
			BpId: '100000000',
			CompanyName: 'SAP',
			City: 'Walldorf',
			Street: 'Dietmar-Hopp-Allee'
		},
		{
			BpId: '100000001',
			CompanyName: 'Computerservice Wolf',
			City: 'Tacherting',
			Street: 'Trostberger Straße'
		}
	))

  await Promise.all ([epmbp])

}) .catch (console.error)

app.use(odatav2proxy({ port: PORT }))

app.listen (PORT, ()=> console.info(`server listening on http:\/\/localhost:${PORT}`))