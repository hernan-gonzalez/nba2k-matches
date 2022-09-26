const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const BoxScore = require('../models/boxScoreModel')


//@desc Get user boxScores
//@route GET /api/boxscores
//@access Private
const getBoxScores = asyncHandler(async (req, res) => {
    //Get user using the id in the JWT
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    const boxScores = await BoxScore.find({ $or: [{ 'home.user': req.user.id }, { 'away.user': req.user.id }] }).populate('home.user', 'psnUserName').populate('away.user', 'psnUserName');
    console.log(boxScores)
    res.status(200).json(boxScores)
})

//@desc Create new boxScores
//@route POST /api/boxScores
//@access Private
const createBoxScore = asyncHandler(async (req, res) => {
    const boxScore = await BoxScore.create(req.body)
    res.status(201).json(boxScore)
})

module.exports = {
    getBoxScores,
    createBoxScore
}