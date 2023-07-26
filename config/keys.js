dbPassword = 'mongodb+srv://' + process.env.MONGO_DB_USERNAME + ':'+ encodeURIComponent(process.env.MONGO_DB_PASSWORD) + '@' + process.env.MONGO_DB_CLUSTER + '.dn5mbqt.mongodb.net/?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword,
};
