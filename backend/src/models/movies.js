const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = Schema({
    name: {
        type: String,
        required: true
    },
    director: String,
    clasification: String
}, {
    timestamps: true
})

module.exports = mongoose.model('movies', movieSchema)