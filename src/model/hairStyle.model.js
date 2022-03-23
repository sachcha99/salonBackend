const mongoose = require("mongoose");

const HairStyleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    image: { type: Object, required: false},
});

const HairStyle = mongoose.model('hairStyle', HairStyleSchema);
module.exports = HairStyle;