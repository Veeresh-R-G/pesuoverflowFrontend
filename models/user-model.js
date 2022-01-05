const mongoose = require('mongoose');
const schema = require('mongoose').Schema;
const URL = "mongodb://localhost:27017/oAuthDB"

mongoose.connect(URL, () => {
    console.log("Connected to Mongo Successfully");
});
const userSchema = new schema({
    username: String,
    googleId: String,
    thumbnail: String
})

const User = mongoose.model('user', userSchema);

module.exports = User;