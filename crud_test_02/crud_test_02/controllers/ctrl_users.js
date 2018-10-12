// controller for URLs starting with /user/

module.exports.homePage = function (req, res) {
    console.log("RES: " + res);
    console.log("REQ: " + req);
    res.send('respond with a resource');
};