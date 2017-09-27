var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

// ---------------------------------


// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp', {
//   useMongoClient: true,
// });


// -----------------------------
// USER
// var User = mongoose.model('User',{
// 	email:{
// 		type: String,
// 		required: true,
// 		minlenght: 1,
// 		trim: true 
// 	}
// });

// var newUser = new User({
// 	email: '  nani@node.com   '
// });

// newUser.save().then((docs) => {
// 	console.log('New User \n', docs);
// }, (err) => {
// 	console.log('unable to create User', err)
// });


// ------------------------
// TODO
// var Todo = mongoose.model('Todo',{
// 	text: {
// 		type: String,
// 		required: true,
// 		minlenght: 1,
// 		trim: true
// 	},
// 	completed:{
// 		type: Boolean
// 	},
// 	completedAt: {
// 		type: Number
// 	}
// });

// var newTodo = new Todo({
// 	text: '     '
// });

// newTodo.save().then((doc) => {
// 	console.log('saved todo', doc);
// },(e) => {
// 	console.log('unable to save todo', e)
// });