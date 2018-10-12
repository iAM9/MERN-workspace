// controller for URLs starting with / {homepage}


module.exports.homePage = function (req, res) {
    res.render('index', { title: 'Express' });
};

