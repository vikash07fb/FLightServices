const {FlightService}= require("../services/index");

// create 
const flightService = new FlightService();
const createFlight = async function(req,res){
    try {
        const flight = await flightService.createFlight(req.body);
        
        res.status(200).json({
            data: flight,
            success: true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to enter  the flights ",
            err : error
        })
    }
}

module.exports ={
    createFlight
}