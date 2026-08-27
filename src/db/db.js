const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect('mongodb+srv://yt:NtcANyQhtuM1RYlG@backend.eokgkr7.mongodb.net/halley')

    console.log('Connected to DB')
}

// halley is the database name

module.exports = connectDB