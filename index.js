const express = require('express')
const { userRouter } = require('./routes/userRoutes')
const { connection } = require('./config/db')
const { flightRouter } = require('./routes/flightRoute')
const { bookingRoute } = require('./routes/booking')
require('dotenv').config()

const port = process.env.port || 8080

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    res.send('Welcome')
})

app.use('/api', userRouter)
app.use('/api', flightRouter)
app.use('/api', bookingRoute)

app.listen(port, async () => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (error) {
        console.log('Something Error');
    }
    console.log(`Server is running at ${port}`);
})