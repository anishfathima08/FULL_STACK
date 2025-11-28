const userModel = require("../models/userModel")

const addUser = async (req, res) => {
    try{
        const userData = userModel({
            registerUsername : req.body.registerUsername,
            registerEmail : req.body.registerEmail,
            registerPassword : req.body.registerPassword,
        })
        await userData.save()
        res.status(200).send('User Registered Successfully...')
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

const getUser = async (req, res) => {
    try{
        const userList = await userModel.find()
        res.status(200).send(userList)
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

const deleteUser = async (req, res) => {
    try{
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send('User Removed Successfully...')
    }
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

const loginUser = async (req, res) => {
    try{
        const loginData = await userModel.findOne({
            registerUsername : req.body.registerUsername,
            registerPassword : req.body.registerPassword
        })
        if(loginData){
            res.status(200).send(loginData)
        }
        else{
            res.status(404).send('Invalid Data...')
        }
    }   
    catch(err){
        res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}

module.exports = { addUser, getUser, deleteUser, loginUser } 