const express = require('express')
const router = express.Router()
const { createBoxScore, getBoxScores, getPlayerRecord, getBoxScoresPaginated } = require('../controllers/boxScoreController')

const { protect } = require('../middleware/authMiddleware')

router.get('/record', protect, getPlayerRecord)

router.get('/paginated', protect, getBoxScoresPaginated)

router.route('/').get(protect, getBoxScores).post(protect, createBoxScore)

module.exports = router