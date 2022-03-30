const express = require('express');
const {addTable, getValues,} = require('../controllers/renderTablesController');
const router = express.Router();
router.get("/renderTables", addTable);
router.post("/renderTables", getValues);
module.exports = router;