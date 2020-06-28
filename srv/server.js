"use strict";

const cds = require("@sap/cds")
const proxy = require("@sap/cds-odata-v2-adapter-proxy")

const port = process.env.PORT || 4004;

cds.on("bootstrap", app => app.use(
  proxy({
    path: "sap/opu/odata/sap",
    port: port
  })
));

module.exports = cds.server