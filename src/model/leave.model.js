const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    datetime: { type: String, required: true },
});

const Leave = mongoose.model('leave', LeaveSchema);
module.exports = Leave;