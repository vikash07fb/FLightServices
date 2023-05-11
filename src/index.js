const express= require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

// const {City} = require("./models/index");
const {PORT}=require("./config/serviceconfig");
const ApiRoutes = require("./routes/index");



const setupAndStartServer= async () => {
   // create the express obj
   const app = express();
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));
   
   app.use('/api',ApiRoutes);

   app.listen(PORT, () => {
      console.log(`Server started at  ${PORT}`);
     
  
   });

}
setupAndStartServer();