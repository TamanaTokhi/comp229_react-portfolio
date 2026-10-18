
exports.displayHome = function(req, res, next) {
    res.json({
        success: true,
        message: 'Portfolio API is running.'
    });
};
