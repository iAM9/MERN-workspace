// controller for URLs starting with /api/

const mongoose = require('mongoose');
console.log("ASDASDASDASD");
var User = mongoose.model('User');




module.exports.addUser = function (req, res) {
    var user = new User();
    console.log(req.body);

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.likes = req.body.likes;

    user.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            
            res.json({message: "User created!"});
        }
    });
};





//module.exports.addUser = async function (req, res) {
//    res.send('respond with a resource');
//};


//module.exports.addUser = async function (req, res) {

//    try {

//        console.log(req.body);
//        const user = new User();
//        user.addUser("testicle man");
//        user.likes(["something", "else"]);

//        await user.save();
//        console.log("User: " + user + " save successfully!");
//        res.send(200).render(JSON.stringify(user, null, 4));
//    } catch (error) {
//        console.dir(error.message, { colors: true });
//    }

//    res.send('respond with a resource');
//};
