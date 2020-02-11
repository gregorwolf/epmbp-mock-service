const express = require('express')
const cds = require('@sap/cds')

const { PORT=3000 } = process.env
const app = express()

cds.serve('all').in(app)

app.listen (PORT, ()=> console.info(`server listening on http://localhost:${PORT}`))

// Seed with sample data
cds.deploy('srv').to('sqlite::memory:',{primary:true}) .then (async db => {

	const { A_EPMBusinessPartner: EPMBusinessPartner } = db.entities('ZEPM_BP_SRV')
	console.log('Adding sample data...')

	const epmbp = db.run (INSERT.into (EPMBusinessPartner+'') .entries (
		{
			BpId: '1003764',
			CompanyName: 'SAP',
			City: 'Walldorf',
			Street: 'Dietmar-Hopp-Allee'
		},
		{
			BpId: '1003765',
			CompanyName: 'Computerservice Wolf',
			City: 'Palo Alto',
			Street: 'Hillview Avenue'
		}
	))

  await Promise.all ([epmbp])

}) .catch (console.error)
