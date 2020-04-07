// CommentController.js
// Import Comment model
const models=require('../models');
// Handle index actions
exports.view = function (req, res) {
    models.Comment.findAll({
        where: {
         messageId:req.params.message_id
        }
      }).then(comments => {
        res.json({
            status: "success",
            comment: "Comments retrieved successfully",
            data: comments
    });
    }).catch(function(err) {
      // print the error details
      res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
  }); 
};

// Handle view Comment info
exports.index = function (req, res) {
    models.Comment.findAll({
        where: {
         id: req.params.comment_id,
         userId:req.params.user_id,
         messageId:req.params.message_id
        }
      }).then(comment => {
        res.json({
            comment: 'Comment details loading..',
            data: comment
        });
    }).catch(function(err) {
      // print the error details
      res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
  }); 
};



exports.new = function(req, res) {
    //handles null error 
     if(!req.params.user_id|| !req.params.message_id || !req.body.contenu){
              res.status(400).send({ error:true, comment: 'Please provide more info' });
    }
     else{
        models.Comment.create({contenu:req.body.contenu,userId:req.params.user_id,messageId:req.body.message_id}).then(comment => {
            console.log("comment's auto-generated ID:", comment.id);
            res.json(comment);
        }).catch(function(err) {
          // print the error details
          res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
      }); 
    }
};


exports.delete_a_comment = function(req, res) {
    models.Comment.destroy({
        where: {
          id: params.comment_id,
          userId:params.user_id,
          messageId:params.message_id
        }
      }).then((comment) => {
        res.json(comment);
      }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
};



exports.update_a_comment = function(req, res) {
    models.Comment.update({ contenu: req.body.contenu}, {
        where: {
            id: params.comment_id,
            userId:params.user_id,
            messageId:params.message_id
        }
      }).then((comment) => {
        res.json(comment);
      }).catch(function(err) {
        // print the error details
        res.send(JSON.parse(JSON.stringify(err)).original.sqlMessage);
    }); 
  };