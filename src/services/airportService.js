const  CrudService  = require("./CrudService");
const { AirportRepository } = require("../repository/index");

const airportRepository = new AirportRepository();

class AirportService extends CrudService {
    constructor() {

        super(airportRepository);
    }
}

module.exports = AirportService;