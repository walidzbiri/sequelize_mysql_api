// UserController.js
// Import all models
let models = require('../models');
// Get all users
exports.view = function (req, res) {
    User.findAll().then(users => {
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
};

// Get one user by id
exports.index = function (req, res) {
    models.User.findAll({
        where: {
          id: req.params.user_id
        }
      }).then(user => {
        res.json({
            message: 'User details loading..',
            data: user
        });
    }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
};



exports.new = function(req, res) {
    //handles null error 
     if(!req.body.name || !req.body.email || !req.body.age){
              res.status(400).send({ error:true, message: 'Please provide more info' });
    }
     else{
            models.User.create({name:req.body.name,email:req.body.email,age:req.body.age}).then(user => {
            console.log("user's auto-generated ID:", user.id);
            res.json({
                message: 'User Created..',
                data: user
            });
          }).catch(function(err) {
            // print the error details
            res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
        }); 
    }
};

exports.delete_a_user = function(req, res) {
    models.User.destroy({
        where: {
          id: req.params.user_id
        }
      }).then(() => {
        res.json({ message: 'User successfully deleted' });
    }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
};

exports.update_a_user = function(req, res) {
    User.update({name:req.body.name,age:req.body.age,email:req.body.email}, {
        where: {
          id: req.params.user_id
        }
    }).then((user) => {
        res.json(user);
    }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
};
  