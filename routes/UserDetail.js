const { Router } = require('express')
const router = Router()

const { getDataUserDetailTable, getDataUserDetailPivotTable, getDataTweet } = require('../controllers/UserDetail')

router.get('/table', getDataUserDetailTable)
router.get('/table-pivot', getDataUserDetailPivotTable)
router.get('/twitter', getDataTweet)

module.exports = router
