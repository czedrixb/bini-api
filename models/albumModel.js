const mongoose = require('mongoose')

const albumSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a album name"],
            unique: true
        },
        year_released: {
            type: Number,
            required: [true, "Please enter year released"],
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Album', albumSchema)