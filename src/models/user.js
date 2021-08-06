const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    discordID: {
        type: String,
        required: true
    },
    authID: {
        type: String,
        required: true
    },
    authCode: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;