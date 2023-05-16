const express = require("express");

const CityController = require("../../controllers/city_controller");
const FlightsController = require("../../controllers/flight_controller")
const AirportController = require("../../controllers/airport_controller");

const router = express.Router();

// routes of city model
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.post('/cities',CityController.createMultipleCities);


// routes of flights model
router.post('/flights',FlightsController.createFlight);
router.get('/flights',FlightsController.getAllFlight);


// routes of airport
router.post('/airports',AirportController.create);
module.exports= router ;

