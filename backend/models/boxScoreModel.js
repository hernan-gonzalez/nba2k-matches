const mongoose = require('mongoose')

const boxScoreSchema = mongoose.Schema(
    {
        player1: {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            team: {
                type: String,
                required: [true, 'Please enter a team name'],
            },
            score: {
                type: Number,
                required: [true, 'Please enter the score']
            }
        },
        player2: {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            team: {
                type: String,
                required: [true, 'Please enter a team name'],
            },
            score: {
                type: Number,
                required: [true, 'Please enter the score']
            }
        }
    },
    {
        timestamps: true,
    })

module.exports = mongoose.model('BoxScore', boxScoreSchema)