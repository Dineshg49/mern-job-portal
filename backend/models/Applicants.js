const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name : {
		type : String ,
		required : false
	},
	email : {
		type : String ,
		required : true
	},
	password : {
		type : String ,
		required : true
	},
	education : {
		type : [String ,Number, Number],
		required : false
	},
	skills : {
		type : [String],
		required : false
	},
	rating : {
		type : Number ,
		required : false
	}
});


module.exports = User = mongoose.model("Users", UserSchema);
