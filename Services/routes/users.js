var express = require('express');
var router = express.Router();
const DB = require('./dbConnections');
const md5 = require('md5');
const API_TYPE = require('./actionConstents');

/* GET users listing. */
router.post('/register', function(req, res, next) {
    let valid_params = mandatory_params(req.body.payload, API_TYPE.REGISTER);
    if(valid_params.status){
        DB.mongojs.Users.find({Email : req.body.payload.Email}, (err, records) => {
            if(err){
                res.json({status: false, message: 'Some error occurs. Please try again...!!!'});
            }
            else if(records.length !== 0){
                res.json({status: false, message: 'Email id already exists! Please try with different email'});
            }
            else {
                delete req.body.payload.CPassword;
                req.body.payload.Password = md5(req.body.payload.Password);
                 DB.mongojs.Users.insert(req.body.payload, function(err, records){
                    res.json({status: true});
                });
            }
        });
    }
    else {
        return res.json(valid_params);
    }
});

router.post('/login', function(req, res, next) {
    let valid_params = mandatory_params(req.body.payload, API_TYPE.LOGIN);
    if(valid_params.status){
        DB.mongojs.Users.find({Email : req.body.Username}, (err, records) => {
            if(err){
                res.json({status: false, message: 'Some error occurs. Please try again...!!!'});
            }
            else if(records.length === 0){
                res.json({status: false, message: 'Username doesn\'t find.'});
            }
            else {
                req.body.Password = md5(req.body.Password);
                if(req.body.Password === records[0].Password){
                    res.json({status: true});
                }
                else{
                    res.json({status: false, message: 'Password doesn\'t matched'});
                }
            }
        });
    }
    else {
        return res.json(valid_params);
    }
});

const registration_params = function(params){
    let response = {
        status: true,
        message: ''
    };

    if(params){
        if(params.FirstName === undefined || params.FirstName.trim() === ""){
            response.status = false;
            response.message = "First name is missing.";
        }
        else  if(params.LastName === undefined || params.LastName.trim() === ""){
            response.status = false;
            response.message = "Last name is missing.";
        }
        else  if(params.Email === undefined || params.Email.trim() === ""){
            response.status = false;
            response.message = "Email is missing.";
        }
        else  if(params.Password === undefined || params.Password.trim() === ""){
            response.status = false;
            response.message = "Password is missing.";
        }
        else  if(params.CPassword === undefined || params.CPassword.trim() === ""){
            response.status = false;
            response.message = "Confoirm password is missing.";
        }
        else  if(params.CPassword !== params.Password){
            response.status = false;
            response.message = "Passwords are not same.";
        }
        else if(params.Gender === undefined || params.Gender === ""){
            response.status = false;
            response.message = "Gender is missing.";
        }
    }
    else {
        response.status = false;
        response.message = "Mandatory fields are missing.";
    }
    return response;
}

const mandatory_params = function (params, TYPE){
    let response = {
        status: false,
        message: ''
    };
    switch(TYPE){
        case API_TYPE.REGISTER: response =  registration_params(params); break;
        case API_TYPE.LOGIN: response =  login_params(params); break;
    }

    return response;
}

const login_params = function (params){
    let response = {
        status: true,
        message: ''
    };

    if(params){
        if(params.Username === undefined || params.Username.trim() === ""){
            response.status = false;
            response.message = "Username is missing.";
        }
        else if(params.Password === undefined || params.Password.trim() === ""){
            response.status = false;
            response.message = "Password is missing.";
        }
    }
    else {
        response.status = false;
        response.message = "Mandatory fields are missing.";
    }
    return response;
}

module.exports = router;
