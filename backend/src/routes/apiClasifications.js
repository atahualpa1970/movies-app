const express = require('express')
const api = express.Router()

const {
    getClasif,
    createClasif,
    getClasif1,
    updateClasif,
    deleteClasif
} = require('../controllers/clasifications.controller')

api.route('/')
    .get(getClasif)
    .post(createClasif)

api.route('/:id')
    .get(getClasif1)
    .put(updateClasif)
    .delete(deleteClasif)

module.exports = api