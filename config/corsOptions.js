// Cross Origin Resource Sharing
const allowedOrigins = require('./allowedOrigins')

const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            return callback(null, true)
        } 
        callback(new Error('Not Allowed by CORS'));
    },

}

// No need to export whitelist as it's logic is handled in the corsOptions object.
module.exports = corsOptions;