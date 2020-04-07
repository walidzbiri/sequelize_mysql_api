// LikeController.js
// Import Like model
const models=require('../models');

// Handle index actions
exports.view = function (req, res) {
    models.Like.findAll().then(likes => {
        res.json({
            status: "success",
            Like: "Likes retrieved successfully",
            data: likes
    });
    }).catch(function(err) {
      // print the error details
      console.log(err);
      //           res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);

  }); 
};

// Handle view Like info
exports.index = function (req, res) {
    models.Like.findAll({
        where: {
         id: req.params.like_id
        }
      }).then(like => {
        res.json({
            Like: 'like details loading..',
            data: like
        });
    }).catch(function(err) {
      // print the error details
      //           res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);

  }); 
};



exports.new = function(req, res) {
    //handles null error 
     if(!req.params.user_id || !req.params.message_id){
              res.status(400).send({ error:true, like: 'Please provide more info' });
    }
     else{
        models.Like.create({UserId:req.params.user_id,MessageId:req.params.message_id}).then(like => {
            console.log("like's auto-generated ID:", like.id);
            res.json(like);
          }).catch(function(err) {
            // print the error details
            res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
        }); 
    }
};


exports.delete_a_Like = function(req, res) {
    models.Like.destroy({
        where: {
          id: params.like_id,
          userId:params.user_id,
          messageId:params.message_id
        }
      }).then((like) => {
        res.json(like);
      }).catch(function(err) {
        // print the error details
       //            res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);

    }); 
};  