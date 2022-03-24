const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    datetime: { type: String, required: true },
});

const Appointment = mongoose.model('appointment', AppointmentSchema);
module.exports = Appointment;