// const {CrudRespository} = require('./crudRepo');
const { Airport } = require('../models/index');
const CrudRepository = require('./crudRepo');
class AirportRespository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRespository;