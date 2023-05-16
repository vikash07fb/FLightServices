const {flights} = require('../models/index');
const {Op} = require('sequelize');

class FlightsRepository {
    #createfilter(data)
    {
        let filter={};

        let priceFlite=[];
        
        if(data.minPrice){
            priceFlite.push({price: {[Op.gte]:data.minPrice}})

            // Object.assign(filter,{price: {[Op.gte]:data.minPrice}})
        }
        if(data.maxPrice){
            priceFlite.push({price: {[Op.lte]:data.maxPrice}})

            // Object.assign(filter,{price: {[Op.lte]:data.maxPrice}})
        }
        // console.log(priceFlite);
        Object.assign(filter,{[Op.and]:priceFlite});
        // Object.assign(filter, {[Op.and]: priceFilter});


        // console.log(filter);
        return filter;


    }
    async createFlight(data) {
        try {
            const flight = await flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getFlight(flightid){
        try {
            const flight = await flights.getByPk(flightid);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllFlight(data){
        try {
            const filter = await this.#createfilter(data);
            const flight = await flights.findAll({
                where : filter
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports= FlightsRepository;