const logger = (options) => (req, res, next) => {
    //options.enable = false;
    if (typeof options === 'object' && options !== null && options.enable) {
        console.log(options);
        console.log('Status code: ', res.statusCode, 'URL: ', req.originalUrl);
    }
    next();
};

module.exports = logger;