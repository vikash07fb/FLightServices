const { Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repo layer")
            throw { error };
        }
    }

    async deleteCity(cityID) {
        try {
            await City.destroy({
                where: {
                    id: cityID
                }
            });

            return true;
        } catch (error) {
            console.log("Something went wrong in the repo layer")
            throw { error };
        }
    }


    async updateCity(cityID, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityID
                }
            });

            return city;

        } catch (error) {
            console.log("Something went wrong in the repo layer")
            throw { error };
        }
    }

    async getCity(cityID) {
        try {
            const city = await City.findByPk(cityID);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repo layer")
            throw { error };
        }
    }

    async getAllCities(filters) {
        try {
            if(filters.name)
            {
                const response= await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith]:filters.name
                        }
                    }
                })

                return response;
            }
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repo layer")
            throw { error };
        }
    }


}

module.exports = CityRepository;