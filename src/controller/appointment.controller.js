const Appointment = require("../model/appointment.model");

//Add New Appointment
const createAppointment = async (req, res) => {
    if (req.body) {

        const data = {
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            datetime: req.body.datetime,
        }
        const appointment = new Appointment(data);

        await appointment.save()
            .then(data => res.status(200).send({ data: data }))
            .catch(err => res.send(err));

    }
}

//update Appointment Details
const updateAppointment = async (req, res) => {
    if (req.body) {
        if (!req.params.id) return res.status(500).send("Id is missing");
        let id = req.params.id;

        updateDetails(id, req, (err, appointment) => {
            if (err) return res.status(500).send(err);
            res.status(200).send(appointment);
        })
    }
}

function updateDetails(id, req, callback) {
    Appointment.findByIdAndUpdate(id, req.body)
        .then((res) => {
            Appointment.findOne({ _id: id }, (err, result) => {
                if (err) {
                    console.log(err);
                    return callback(err);
                } else {
                    var appointment = result;
                    console.log(appointment);
                    return callback(null, appointment);
                }
            });
        })
        .catch(err => {
            console.log(err) 
            return callback(err);
        })
}

//get All Appointment
const getAllAppointments = async (req, res) => {
    await Appointment.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

//delete Appointment
const deleteAppointment = async (req, res) => {
    if (req.params.id) {
        await Appointment.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) return res.status(500).send(err);
            console.log(result);
            return res.status(200).send(result);
        });
    }
}


module.exports = {
    createAppointment: createAppointment,
    updateAppointment: updateAppointment,
    deleteAppointment: deleteAppointment,
    getAllAppointments: getAllAppointments,
}