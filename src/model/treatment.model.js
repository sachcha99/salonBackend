const mongoose = require("mongoose");

const TreatmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    image: { type: Object, required: false},
});

const Treatment = mongoose.model('treatment', TreatmentSchema);
module.exports = Treatment;