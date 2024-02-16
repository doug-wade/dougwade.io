require('dotenv').config()

module.exports = function() {
    return {
        dsn: process.env.SENTRY_DSN || "development"
    };
};