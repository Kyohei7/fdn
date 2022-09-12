const { Router } = require('express')
const router = Router()
const axios = require('axios')

const { getDataUserDetailTable, getDataUserDetailPivotTable } = require('../controllers/UserDetail')

router.get('/table', getDataUserDetailTable)
router.get('/table-pivot', getDataUserDetailPivotTable)

module.exports = router
