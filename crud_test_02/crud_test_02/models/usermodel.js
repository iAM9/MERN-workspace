const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    likes: [String],
});

UserSchema.method('addUser', function addUser(str) {
    const fullname = String(str).split(' ');
    this.firstName = fullname[0];
    this.lastName = fullname[1];
});

UserSchema.method('loves', function loves(stuff) {
    this.likes.push(stuff);
});

module.exports = mongoose.model('User', UserSchema);

console.log('User schema created!');