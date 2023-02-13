const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  require("../db")

const DroneModel = require("../models/Drone.model.js")

  async function insertData(next){
    try {
        const response = await DroneModel.create(drones)
        console.log("Drones añadidos a la BD")
        // mongoose.connection.close()
        // console.log(mongoose.disconnect())
        
    } catch (error) {
        console.log(error)
    }
  }

  insertData()