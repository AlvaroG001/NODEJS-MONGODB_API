const mongoose = require("mongoose");

const reservaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reserva:  {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Reserva', reservaSchema);