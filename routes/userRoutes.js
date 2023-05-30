const express = require('express')
const { userModel } = require('../models/userModel')
const userRouter = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// user register
userRouter.post('/register', async (req, res) => {

    const { name, email, password } = req.body
    try {
        bcrypt.hash(password, 5, async (err, secret) => {
            if (err) {
                console.log(err)
            } else {
                const user = new userModel({ name, email, password: secret })
                await user.save()
                res.status(201).send("User registered successfully")
            }
        })
    } catch (error) {
        console.log({ "err": "something went wrong" })
    }
});


// user login 
userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, decode) => {
                if (decode) {
                    const token = jwt.sign({ userID: user[0]._id }, process.env.secret)
                    res.status(201).send({ 'message': "Login Successfull", 'token': token })
                } else {
                    res.send('Check your email/password')
                }
            })
        } else {
            res.send('somthing wrong')
        }
    } catch (error) {
        console.log({ 'err': 'something wrong' })
    }
})



// get all user

userRouter.get('/alluser', async(req,res) =>{
    try {
        const alluser = await userModel.find()
        res.status(200).send(alluser)
    } catch (error) {
        
        res.send('somethign error')
    }
})

module.exports = { userRouter }