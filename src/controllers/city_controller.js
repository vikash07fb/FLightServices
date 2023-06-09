const {CityService} = require("../services/index");

const cityService = new CityService();

// post request 
const create = async function(req,res){
    try {
        const city = await cityService.createCity(req.body);

        return res.status(201).json({
            data : city,
            success : true ,
            message : "Successfully created the city ",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create the city ",
            err : error
        })
    }
}

// DELETE => /city/:id
const destroy = async function(req,res){
    try {
        const response = await cityService.deleteCity(req.params.id);

        return res.status(200).json({
            data : response,
            success : true ,
            message : "Successfully deleted  the city ",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete the city ",
            err : error
        })
    }
}

// GET =? /city/:id
const get = async function(req,res){
    try {
        const response = await cityService.getCity(req.params.id);

        return res.status(200).json({
            data : response,
            success : true ,
            message : "Successfully fetched  the city ",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to get  the city ",
            err : error
        })
    }
}
const getAll = async function(req,res){
    try {
        const response = await cityService.getAllCities(req.query);

        return res.status(200).json({
            data : response,
            success : true ,
            message : "Successfully fetched all the city ",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to get all the city ",
            err : error
        })
    }
}



// PATCH => /city/:id
const update = async function(req,res){
    try {
        const response = await cityService.updateCity(req.params.id,req.body);

        return res.status(200).json({
            data : response,
            success : true ,
            message : "Successfully updated  the city ",
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update the city ",
            err : error
        })
    }
}

const createMultipleCities = async function(req,res){
    try {
     const cities = req.body; // Assuming the request body has a "cities" property with an array of city objects

//   if (!cities || !Array.isArray(cities)) {
//     res.status(400).json({ error: 'Invalid request body' });
//     return;
//   }

//    console.log(cities);
//    res.status(201).json({
//     data : cities,

//    })

  const values = await cityService.createMultileCities(cities);
//   const values = cities.map((city) => [city.name]);
  res.status(201).json({
    data : values,
    success : true ,
    message : "Successfully enterred the cities ",
    err : {}
  })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to enter  the city ",
            err : error
        })
    }
}
module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    createMultipleCities
}