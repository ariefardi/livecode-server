const Model = require('../models/user-model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class Controller {
    static getUsers(req,res){
        Model.find()
        .then(dataUsers => {
            res.status(200).json({
                message: 'data users',
                dataUsers
            })
        })
    }
    static register(req,res){
        let username = req.body.username
        let email = req.body.email
        Model.findOne({username})
        .then(found=> {
            if (found) {
                res.status(500).json({
                    message: 'username Used'
                })
            }
            else{
                const salt = bcrypt.genSaltSync(7);
                const hash = bcrypt.hashSync(req.body.password, salt);
                let password = hash;
                Model.create({
                    username,
                    email,
                    password
                })
                .then(user=> {
                    res.status(200).json({
                        message: "successfully sign up",
                        user
                    });
                })
            }
        })
    }
}

module.exports = Controller