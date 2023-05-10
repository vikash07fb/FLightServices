const express= require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

// const {City} = require("./models/index");
const {PORT}=require("./config/serviceconfig");

const CityRepository = require("./repository/city_repo")


const setupAndStartServer= async () => {
   // create the express obj
   const app = express();
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));


   app.listen(PORT, () => {
      console.log(`Server started at  ${PORT}`);
      const repo = new CityRepository;
      repo.deleteCity(1);
  
   });

}
setupAndStartServer();