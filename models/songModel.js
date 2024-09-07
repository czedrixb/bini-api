const mongoose = require('mongoose')

const songSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a song name"],
            unique: true
        },
        duration: {
            type: String,
            required: [true, "Please enter duration"],
        },
        album: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Album',
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Song', songSchema)