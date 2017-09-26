const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('unable to connect to Mongodb');
	}
	console.log('connected to Mongodb');

	// deletemany

	// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.log('unable to fetch todos', err);
	// });

	// deleting one document

	// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete

	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });


	// test

	db.collection('Users').findOneAndDelete({_id: ObjectID("59ca36ac5382b11d6bc5b35d")}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	})

	db.collection('Users').deleteMany({name: "naveen"});

	// db.close();
});