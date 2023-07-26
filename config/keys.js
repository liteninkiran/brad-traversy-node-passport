dbPassword = 'mongodb+srv://' + process.env.MONGO_DB_USERNAME + ':'+ encodeURIComponent(process.env.MONGO_DB_PASSWORD) + '@' + process.env.MONGO_DB_CLUSTER + '.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: dbPassword,
};
