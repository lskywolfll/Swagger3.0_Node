
const config = {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 8080,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017"
};

module.exports = config;