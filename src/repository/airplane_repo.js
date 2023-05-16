const {Airplane} = require("../models/index");


class AirplaneRepositorty {
    
    async getAirplanes(id)
    {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repo layer")
            throw { error };
        }
    }
}

module.exports= AirplaneRepositorty;