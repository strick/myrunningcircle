const dotenv = require('dotenv');
dotenv.config(); 

module.exports = {

    dbhost: process.env.MONGODB_HOST,

    feedTable: process.env.MONGODB_FEED_TABLE,

    usersTable: process.env.MONGODB_USER_TABLE
}