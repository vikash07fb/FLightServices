const express = require("express");

const CityController = require("../../controllers/city_controller");
const FlightsController = require("../../controllers/flight_controller")

const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.post('/cities',CityController.createMultipleCities);

router.post('/flights',FlightsController.createFlight);

module.exports= router ;

