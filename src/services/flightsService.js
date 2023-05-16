const {AirplaneRepositorty,FlightsRepository} = require("../repository/index");


class FlightService {
    constructor (){
        this.airplaneRepository= new AirplaneRepositorty();
        this.flightRepository= new FlightsRepository();

    }

    async createFlight (data){
        try {
            const airplane = await this.airplaneRepository.getAirplanes(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;

            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports= FlightService;