const {flights} = require('../models/index');

class FlightsRepository {
    async createFlight(data) {
        try {
            const flight = await flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports= FlightsRepository;