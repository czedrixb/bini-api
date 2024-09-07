const mongoose = require('mongoose')

const memberSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a member name"],
        },
        full_name: {
            type: String,
            required: [true, "Please enter a member name"],
        },
        age: {
            type: Number,
            required: true,
            default: 0,
        },
        birthdate: {
            type: Date,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Member', memberSchema)