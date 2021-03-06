'use strict';

const  Joi  = require('joi')

const UserSchema  = Joi.object().keys({
    login : Joi.string().required(),
    password : Joi.string().min(8).required(),
    email : Joi.string().email().required(),
    firstname : Joi.string().required(),
    lastname : Joi.string().required(),
    company : Joi.string(),
    function : Joi.string()
});

module.exports = UserSchema;
