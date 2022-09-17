const express = require('express')
const router = express.Router()
const { createBoxScore, getBoxScores } = require('../controllers/boxScoreController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getBoxScores).post(protect, createBoxScore)

module.exports = router