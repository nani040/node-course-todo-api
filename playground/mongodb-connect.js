// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('unable to connect to Mongodb');
	}
	console.log('connected to Mongodb');

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Nani',
	// 	age: 26,
	// 	location: 'Vijayawada'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('unable to insert todo', err);
	// 	}

	// getTimestamp
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	// });

	db.close();
});