const mongoose = require('mongoose')

const connectionURL = 'mongodb+srv://vala:11110000@lab7-sxtzg.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,     // crear indexes
    useUnifiedTopology: true,
    useFindAndModify: false
})