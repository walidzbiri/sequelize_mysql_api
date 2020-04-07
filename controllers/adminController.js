// UserController.js
// Import User model
'use strict';
let models = require('../models');
var bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
// const db=require('../models/index');

exports.new = function(req, res) {
    const saltRounds = 10;
    // let new_admin=new Admin(req.body);
    let mdpclair=req.body.password;
    bcrypt.hash(mdpclair, saltRounds,(err, hash)=> {
        // Store hash in your password DB.
        if(err)
            console.log(err);
            req.body.password=hash;
            if(!req.body.username || !req.body.password){
                res.status(400).send({ error:true, message: 'Please provide more info' });
             }
            else{
                models.Admin.create({username:req.body.username,password:req.body.password}).then(admin => {
                     console.log("Admin's auto-generated ID:", admin.id);
                     res.json({
                        status: "success",
                        comment: "Admin Signed up successfully",
                        admin: admin.id
                });
            }).catch(function(err) {
                // print the error details
                res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
            });  
            }
    });
};



exports.getAdmin = function(req, res) {
    models.Admin.findAll({
        where: {
          username: req.body.username
        }
      }).then(admin => {
        bcrypt.compare(req.body.password, JSON.parse(JSON.stringify(admin))[0].password,function(err, etat_login) {
            if(etat_login==true){
                const token = jwt.sign({ username:req.body.username },process.env.jwt_secret, {
                    expiresIn: '30m'
                  });
                  res.cookie('jwt_token', token, {
                    expires: new Date(Date.now()+1232567),
                    secure: false, // set to true if your using https
                    httpOnly: true,
                    });
                    res.send('Check your cookies. One should be in there now');
                }
                
            else{
                res.send("Login NOT successful");
            }
        });
    }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
};