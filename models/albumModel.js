const mongoose = require('mongoose')

const albumSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a album name"],
        },
        year_released: {
            type: Year,
            required: [true, "Please enter year released"],
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Album', albumSchema)