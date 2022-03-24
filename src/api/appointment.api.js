const express = require('express');
const router = express.Router();
const AppointmentController = require('../controller/appointment.controller');

module.exports = function (){
    router.get('/', AppointmentController.getAllAppointments);
    router.post('/create', AppointmentController.createAppointment);
    router.put('/update/:id', AppointmentController.updateAppointment);
    router.delete('/delete/:id', AppointmentController.deleteAppointment);
    return router;
}
