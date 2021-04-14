const dotenv = require('dotenv');
dotenv.config(); 

module.exports = {

    dbhost: process.env.MONGODB_HOST,

    dbname: process.env.MONGODB_NAME,

    feedTable: "runnning-feed",

    usersTable: "users"
}