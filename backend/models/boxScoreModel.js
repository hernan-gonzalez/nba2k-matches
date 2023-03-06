const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const boxScoreSchema = mongoose.Schema(
    {
        home: {
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
            },
            outcome: {
                type: String,
                required: [true, 'Please enter the outcome']
            }
        },
        away: {
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
            },
            outcome: {
                type: String,
                required: [true, 'Please enter the outcome']
            }
        }
    },
    {
        timestamps: true,
    })

boxScoreSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('BoxScore', boxScoreSchema)