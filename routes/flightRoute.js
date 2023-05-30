const express = require('express')
const { flightModel } = require('../models/flightModel')
const flightRouter = express.Router()

// get all flight list here
flightRouter.get('/flights', async (req, res) => {
    try {
        const allflight = await flightModel.find()
        res.status(200).send(allflight)
    } catch (error) {
        res.send('something wrong')
    }
})


// Post route
// his endpoint should allow users to add new flights to the system.
flightRouter.post('/flights', async (req, res) => {
    try {
        const { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price } = req.body;
        const newFlight = new flightModel({ airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price });
        await newFlight.save();
        res.status(201).send({
            'msg': 'New Flight has been Added..'
        })
    } catch {
        res.status(404).send({
            'msg': 'Error in adding the new flight..'
        })
    }
})



// This endpoint should return the details of a specific flight identified by its ID.
flightRouter.patch('/flights/:id', async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    try {
        await flightModel.findByIdAndUpdate({_id:id},payload)
        res.status(204).send('Updated')
    } catch (error) {
        res.send('Somethgin wrong')
    }
})



// delete
// This endpoint should allow users to update the details of a specific flight identified by its ID.
flightRouter.delete('/flights/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await flightModel.findByIdAndDelete({_id:id})
        res.status(202).send("Deleted")
    } catch (error) {
        res.send('Somthing error while deleting flight.')
    }
})


module.exports = { flightRouter }