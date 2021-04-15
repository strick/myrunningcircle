if(process.env.MONGODB_HOST == undefined){
    const dotenv = require('dotenv');
    dotenv.config(); 
}

module.exports = {

    dbhost: process.env.DBHOST,

    dbname: process.env.DBNAME,

    feedTable: "runnning-feed",

    usersTable: "users"
}