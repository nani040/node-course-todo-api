const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err){
		return console.log('unable to connect to Mongodb');
	}
	console.log('connected to Mongodb');

	// db.collection('Todos').findOneAndUpdate({_id: new ObjectID("59ca35fd5382b11d6bc5b31e")}, 
	// 	{$set: {completed: true}},
	// 	{returnOriginal: false}).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').update({_id: new ObjectID("59ca10fbe7f8c01c39d326ac")}, 
		{$set: {name: "sony"}, $inc: {age: 1}},
		{returnOriginal: false}).then((result) => {
		console.log(result);
	})

	// db.close();
});