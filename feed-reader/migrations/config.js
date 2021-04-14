const dotenv = require('dotenv');
dotenv.config(); 

module.exports = {

    dbhost: function(){
        return process.env.MONGODB_HOST;
    }
}