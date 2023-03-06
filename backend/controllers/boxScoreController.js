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
    const boxScores = await BoxScore.find({ $or: [{ 'home.user': req.user.id }, { 'away.user': req.user.id }] }).populate('home.user', 'psnUserName').populate('away.user', 'psnUserName').sort({ createdAt: -1 });
    res.status(200).json(boxScores)
})

//@desc Get user boxScores
//@route GET /api/boxscores
//@access Private
const getBoxScoresPaginated = asyncHandler(async (req, res) => {
    //Get user using the id in the JWT
    const user = await User.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    var query = { $or: [{ 'home.user': req.user.id }, { 'away.user': req.user.id }] };
    var options = {
        sort: { createdAt: -1 },
        page: 1,
        limit: 10,
        populate: [{
            path: 'home.user',
            select: 'psnUserName'
        }, {
            path: 'away.user',
            select: 'psnUserName'
        }],
    };
    // const boxScores = await BoxScore.paginate().find({ $or: [{ 'home.user': req.user.id }, { 'away.user': req.user.id }] }).populate('home.user', 'psnUserName').populate('away.user', 'psnUserName').sort({ createdAt: -1 });
    const boxScores = await BoxScore.paginate(query, options).then();
    res.status(200).json(boxScores)
})

//@desc Create new boxScores
//@route POST /api/boxScores
//@access Private
const createBoxScore = asyncHandler(async (req, res) => {
    const boxScore = await BoxScore.create(req.body)
    res.status(201).json(boxScore)
})

//@desc Create new boxScores
//@route GET /api/boxScores/record
//@access Private
const getPlayerRecord = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    const wins = await BoxScore.countDocuments({ $or: [{ "home.user": req.user.id, "home.outcome": 'W' }, { "away.user": req.user.id, "away.outcome": 'W' }] });

    const totalGames = await BoxScore.countDocuments({ $or: [{ "home.user": req.user.id }, { "away.user": req.user.id }] })

    res.status(200).json({ wins, totalGames });
})

module.exports = {
    getBoxScores,
    createBoxScore,
    getPlayerRecord,
    getBoxScoresPaginated
}