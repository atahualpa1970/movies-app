const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost:27017/movieDB'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log('Conexión a movieDB establecida...')
})