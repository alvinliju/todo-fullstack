const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, //5 minutes
    limit: 100, // request per 5 minutes
    standardHeaders:true,
    legacyHeaders: false //Disables the `X-Ratelimit` headers
})

module.exports = {
    limiter
}