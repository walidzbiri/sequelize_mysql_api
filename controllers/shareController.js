// ShareController.js
// Import Share model
const models=require('../models');


// Handle index actions
exports.view = function (req, res) {
    models.models.Share.findAll().then(shares => {
        res.json({
            status: "success",
            share: "Shares retrieved successfully",
            data: shares
    });
    }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
};

// Handle view Share info
exports.index = function (req, res) {
    models.Share.findAll({
        where: {
         id: req.params.share_id
        }
      }).then(share => {
        res.json({
            share: 'Share details loading..',
            data: share
        });
    }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
};



exports.new = function(req, res) {
    //handles null error 
     if(!req.params.message_id || !req.params.user_id){
              res.status(400).send({ error:true, share: 'Please provide more info' });
    }
     else{
        models.Share.create({userId:req.params.user_id,messageId:req.params.message_id}).then(share => {
            console.log("share's auto-generated ID:", share.id);
            res.json(share);
          }).catch(function(err) {
            // print the error details
            res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
        });     
    }
};


exports.delete_a_share = function(req, res) {
    models.Share.destroy({
        where: {
          id: params.share_id,
          userId:params.user_id,
          messageId:params.message_id
        }
      }).then((share) => {
        res.json(share);
      }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
};  