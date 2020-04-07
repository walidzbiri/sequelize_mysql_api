// Import contact controller
const verifyToken = require('./verify_token');

var userController = require('./controllers/userController');
var likeController = require('./controllers/likeController');
var commentController = require('./controllers/commentController');
var messageController = require('./controllers/messageController');
var shareController = require('./controllers/shareController');
var adminController = require('./controllers/adminController');
let router = require('express').Router();


// admins actions
router.route('/admins/signup')
    .post(adminController.new);
router.route('/admins/login')
    .post(adminController.getAdmin);

// users actions
router.route('/users')
    .post(verifyToken,userController.new)// create new user
    .get(verifyToken,userController.view);// view all users

router.route('/users/:user_id')
    .get(verifyToken,userController.index) // get a specific user
    .delete(verifyToken,userController.delete_a_user)// delete a specific user
    .put(verifyToken,userController.update_a_user); // update a user


// messages actions
router.route('/users/:user_id/messages')
    .post(verifyToken,messageController.new)// create new message
    .get(verifyToken,messageController.view);// get all messages of a user

router.route('/users/:user_id/messages/:message_id')
    .get(verifyToken,messageController.index)// get a specific message
    .delete(verifyToken,messageController.delete_a_message)// delete a specific message
    .put(verifyToken,messageController.update_a_message); // update a message

// comments actions
router.route('/users/:user_id/messages/:message_id/comments')
    .post(verifyToken,commentController.new);// create a new comment

router.route('/messages/:message_id/comments')
    .post(verifyToken,commentController.view);// get all comments on message

router.route('/users/:user_id/messages/:message_id/comments/:comment_id')
    .get(verifyToken,commentController.index) // get a specific comment
    .delete(verifyToken,commentController.delete_a_comment)// delete a specific comment
    .put(verifyToken,commentController.update_a_comment); // update a comment

// likes actions
router.route('/users/:user_id/messages/:message_id/likes') // work on already liked !!
    .post(verifyToken,likeController.new); // create a new like
router.route('/users/:user_id/messages/:message_id/likes/:share_id')// work on didn't liked !!
    .delete(verifyToken,likeController.delete_a_Like); //delete specific like

// shares actions
router.route('/users/:user_id/messages/:message_id/shares')
    .post(verifyToken,shareController.new); // create a new share
router.route('/users/:user_id/messages/:message_id/shares/:share_id')
    .delete(verifyToken,shareController.delete_a_share); // delete a specific share




// REST = REpresentational State Transfer
// API =  Application programming interface
// RESTful + API

// Les types dial Web services
// 1- SOAP (full of constraints)
// 2- REST (2000 Roy Fielding) fully rest / not fully rest
// 3- GraphQL

// REST # HTTP # API


// design ghir f site web
// Website
// URL = www.monchat.com/getUsers?id=1 



// Api
// ykoun 3ndek ghir les noms f URL
// design dial les URLS / routes
// ressource based url
// www.monchat.com/profile/1



module.exports=router;


