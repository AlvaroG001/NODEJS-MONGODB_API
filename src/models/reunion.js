const mongoose = require('mongoose');

const reunionSchema = new mongoose.Schema({
    comunity_id: { type: String, required: true },
    day: { type: String, required: true },
    hour: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    information: { type: String, required: true }
});

module.exports = mongoose.model('Reunion', reunionSchema, 'reuniones');