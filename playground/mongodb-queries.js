const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// ----todo id----
// var id ='59cc9637c2bf9e140bc10b46';
var id = '59cb542e63e01f3f127c4ebd'

if(!ObjectID.isValid(id)){
	return console.log('ID not found')
}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('todos: \n', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('todo: \n', todo);
// });

// Todo.findById(id).then((todoById) => {
// 	if(!todoById){
// 		return console.log('ID not found');
// 	}
// 	console.log('todo Find By Id: \n', todoById);
// }).catch((e)=> console.log(e));

User.findById(id).then((user) => {
	if(!user){
		return console.log('User Not Found');
	}
	console.log('Email id:', user.email);
})