var mongoose = require('mongoose');

var User = mongoose.model('User',{
	email:{
		type: String,
		required: true,
		minlenght: 1,
		trim: true 
	}
});

skdjkalsdalsdaksldakl
module.exports = {User};
