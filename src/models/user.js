const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    comunity_id:  {
        type: String,
        required: true
    },
    door: {
        type: String,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    isPresident: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);