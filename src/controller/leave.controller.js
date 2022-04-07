const Leave = require("../model/leave.model");

//Add New Leave
const createLeave = async (req, res) => {
    if (req.body) {

        const data = {
            name: req.body.name,
            userID:req.body.userID,
            description: req.body.description,
            type: req.body.type,
            datetime: req.body.datetime,
        }
        const leave = new Leave(data);

        await leave.save()
            .then(data => res.status(200).send({ data: data }))
            .catch(err => res.send(err));

    }
}

//update Leave Details
const updateLeave = async (req, res) => {
    if (req.body) {
        if (!req.params.id) return res.status(500).send("Id is missing");
        let id = req.params.id;

        updateDetails(id, req, (err, leave) => {
            if (err) return res.status(500).send(err);
            res.status(200).send(leave);
        })
    }
}

function updateDetails(id, req, callback) {
    Leave.findByIdAndUpdate(id, req.body)
        .then((res) => {
            Leave.findOne({ _id: id }, (err, result) => {
                if (err) {
                    console.log(err);
                    return callback(err);
                } else {
                    var leave = result;
                    console.log(leave);
                    return callback(null, leave);
                }
            });
        })
        .catch(err => {
            console.log(err) 
            return callback(err);
        })
}

//get All Leave
const getAllLeaves = async (req, res) => {
    await Leave.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}
//get Leave by ID
const getLeaveById = async (req, res) => {
    await Leave.find({ userID: req.params.userID }, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  };
//delete Leave
const deleteLeave = async (req, res) => {
    if (req.params.id) {
        await Leave.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) return res.status(500).send(err);
            console.log(result);
            return res.status(200).send(result);
        });
    }
}


module.exports = {
    createLeave: createLeave,
    updateLeave: updateLeave,
    deleteLeave: deleteLeave,
    getAllLeaves: getAllLeaves,
    getLeaveById:getLeaveById
}