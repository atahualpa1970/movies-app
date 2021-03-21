const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clasificationSchema = Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('clasification', clasificationSchema)