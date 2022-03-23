const express = require('express');
const router = express.Router();
const HairStyleController = require('../controller/hairStyle.controller');

module.exports = function (){
    router.get('/', HairStyleController.getAllsHairStyles);
    router.post('/create', HairStyleController.createHairStyle);
    router.put('/update/:id', HairStyleController.updateHairStyle);
    router.delete('/delete/:id', HairStyleController.deleteHairStyle);
    return router;
}
