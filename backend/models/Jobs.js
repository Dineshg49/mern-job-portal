const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobSchema = new Schema({
	title : {
		type : String ,
		required : true
	},
	name_of_recruiter : {
		type : String ,
		required : true
	},
	email_of_recruiter : {
		type : String ,
		required : true
    },
    max_applications : {
        type : Number,
        required : true
    },
    max_positions : {
        type : Number,
        required : true
    },
    date_of_posting :{
        type : Date ,
        required : true
    },
    deadline_for_application : {
        type : Date ,
        required : true
    },
    required_skill_sets :{
        type : [String] ,
        required : true
    },
    type_of_job : {
        type : String ,
        required : true
    },
    duration : {
        type : Number ,
        required : true
    },
    salary : {
        type : Number ,
        required : true
    },
    rating : {
        type : Number ,
        required : true
    }
});


module.exports = User = mongoose.model("Users", JobSchema);
