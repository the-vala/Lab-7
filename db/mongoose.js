const mongoose = require('mongoose')

var connectionURL = process.env.connectionURL || require('../config.js').connectionURL

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,     // crear indexes
    useUnifiedTopology: true,
    useFindAndModify: false
})