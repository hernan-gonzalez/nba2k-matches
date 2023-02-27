const express = require('express')
const router = express.Router()
const { createBoxScore, getBoxScores, getPlayerRecord } = require('../controllers/boxScoreController')

const { protect } = require('../middleware/authMiddleware')

router.get('/record', protect, getPlayerRecord)

router.route('/').get(protect, getBoxScores).post(protect, createBoxScore)

module.exports = router