// MessageController.js
// Import models
const models=require('../models');


// Handle index actions
exports.view = function (req, res) {
    models.Message.findAll({
        where: {
         id: req.params.user_id
        }
      }).then(messages => {
        res.json({
            status: "success",
            message: "Messages retrieved successfully",
            data: messages
    });
    }).catch(function(err) {
      // print the error details
      res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
  }); 
};

// Handle view Message info
exports.index = function (req, res) {
    models.Message.findAll({
        where: {
         id: req.params.message_id
        }
      }).then(message => {
        res.json({
            message: 'Message details loading..',
            data: message
        });
    }).catch(function(err) {
      // print the error details
      res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
  }); 
};



exports.new = function(req, res) {
    //handles null error 
     if(!req.params.user_id || !req.body.contenu){
              res.status(400).send({ error:true, message: 'Please provide more info' });
    }
     else{
        models.Message.create({contenu:req.body.contenu,UserId:req.params.user_id}).then(message => {
            console.log("message's auto-generated ID:", message.id);
            res.json(message);
          }).catch(function(err) {
            // print the error details
            res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
        }); 
    }
};


exports.delete_a_message = function(req, res) {
    models.Message.destroy({
        where: {
          id: params.message_id,
          UserId:params.user_id
        }
      }).then(() => {
        res.json(message);
      }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
};


exports.update_a_message = function(req, res) {
    models.Message.update({ contenu: message.contenu}, {
        where: {
          id: params.id,
          userId:params.user_id
        }
      }).then((message) => {
        res.json(message);
      }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
  };