const express = require('express');
const router = express.Router();

const Drone = require ("../models/Drone.model.js")

router.get('/drones', async (req, res, next) => {

  try {
    const response = await Drone.find()

    res.render("drones/list.hbs", {
      allDrones: response
    })
    
  } catch (error) {
    next (error)
  }
});

router.get('/drones/create', (req, res, next) => {
 
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', async(req, res, next) => {
  
  try {

    const {name,propellers,maxSpeed} = req.body
    const response = await Drone.create({
      name:name,
      propellers:propellers,
      maxSpeed:maxSpeed
    });
    console.log(response)
    res.redirect("/drones")
    
  } catch (error) {
    res.redirect("/drones/create-form.hbs")
  }

});

router.get('/drones/:id/edit', async(req, res, next) => {
 
  try {
    
    const {id} = req.params
    const droneUpdate = await Drone.findById(id)
    
    res.render("drones/update-form.hbs", droneUpdate)
 
  } catch (error) {
    next (error)
  }
  
});

router.post('/drones/:id/edit', async (req, res, next) => {

  const {id} = req.params
  const {name,propellers,maxSpeed} = req.body
  try {
    
    const response = await Drone.findByIdAndUpdate(id,{
      name: name,
      propellers: propellers,
      maxSpeed: maxSpeed
    })

    res.redirect("/drones")
  } catch (error) {
    next(error)
  }



});

router.post('/drones/:id/delete', async(req, res, next) => {
  
  const { id } = req.params
  try {

    await Drone.findByIdAndDelete(id)
    res.redirect("/drones")

  } catch (error) {
    next(error)
  }

});

module.exports = router;
