const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('Database is Connected...'))
        .catch(() => console.log('Database is Not Connected...'))
}

module.exports = connectDB 