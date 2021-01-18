const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name : {
		type : String ,
	},
	email : {
		type : String ,
	},
	password : {
		type : String , 
	},
	education : [{
		inst : String ,
		join : String ,
		end : String
	}],
	skills : [
		{type : String}
	],
	rating : {
		type : Number ,
	},
	jobsopen : [
		{type : String}
	],
	jobsrejected: [
		{type : String}
	],
	noopen : {
		type : Number ,
	},
	type : {
		type : String,
	},
	contactno : {
		type : String,
	} ,
	jobs_created : [
		{type : String}
	],
	bio :
	{
		type : String
	},
	jobs_applied : [{
		type : String
	}],
	jobs_rejected : [{
		type : String
	}],
	job_selected :{
		type : String
	}
});

module.exports = User = mongoose.model("Users", UserSchema);
