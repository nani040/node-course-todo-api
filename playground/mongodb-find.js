const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('unable to connect to Mongodb');
	}
	console.log('connected to Mongodb');

	// db.collection('Todos').find({_id: ObjectID('59ca10fbe7f8c01c39d326ab')}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2))
	// }, (err) => {
	// 	console.log('unable to fetch todos', err);
	// });	

	db.collection('Todos').find().count().then((count) => {
		console.log('Todos count:', count);
	}, (err) => {
		console.log('unable to fetch todos', err);
	});

	db.close();
});