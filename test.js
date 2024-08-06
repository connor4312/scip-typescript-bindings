const { scip } = require('./');

scip.Index.deserializeBinary(require('fs').readFileSync("./index.scip"))
