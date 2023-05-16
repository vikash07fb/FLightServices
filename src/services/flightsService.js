const {AirplaneRepositorty,FlightsRepository} = require("../repository/index");
const compareTime = require("../utils/helper");

class FlightService {
    constructor (){
        this.airplaneRepository= new AirplaneRepositorty();
        this.flightRepository= new FlightsRepository();

    }

    async createFlight (data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime))
            {
               throw {error: "Arrival time cannot be less than the departure time"};
            }
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

    async getAllFlight(data){
        try {
            const flight = await this.flightRepository.getAllFlight(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports= FlightService;