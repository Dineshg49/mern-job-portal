var express = require("express");
var router = express.Router();

const Job = require("../models/Jobs")
var user_pro = ""

// GET request 
// Getting all the users
router.get("/", function(req, res) {
  console.log("here")
    const today = Date.now();
    var x = new Intl.DateTimeFormat('ko-KR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit' ,hour12 : false }).format(today);
    
    Job.find({deadline : {$gt : x } , status : "active"},function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

router.route('/add-applicant').get(function(req, res) {
  // console.log("heee")
  //console.log(user_pro)
  Job.findOneAndUpdate(
      { title: req.query.title},
      { $push: {curr_applicants : req.query.email} },
      (err, updated_data) => {
          if(err) {
              console.log("update not done");
          }
          else {
              
              res.json(updated_data)
              console.log(updated_data)
          }
      }
  );

});

router.get("/all", function(req, res) {
  // ..console.log("here")
  //   const today = Date.now();
  //   var x = new Intl.DateTimeFormat('ko-KR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit' ,hour12 : false }).format(today);
    
    Job.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});
router.post("/create", (req, res) => {
  //  console.log("yehwala")
   // const today = Date.now();
  //  var x = new Intl.DateTimeFormat('ko-KR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit' ,hour12 : false }).format(today);
   // var y = req.body.deadline
    //if(x > y)
      //  console.log("x")
    //else
      //  console.log("y")


    const newUser = new Job({
        title: req.body.title , 
        name_of_recuiter: req.body.name_of_recuiter , 
        email_of_recuiter : req.body.email_of_recuiter , 
        max_applications : req.body.max_applications , 
        max_positions : req.body.max_positions , 
        date_of_posting :req.body.date_of_posting , 
        deadline : req.body.deadline , 
        skills :  req.body.skills , 
        type: req.body.type , 
        duration : req.body.duration , 
        salary : req.body.salary , 
        rating : req.body.rating , 
        status : req.body.status,
        curr_applicants : req.body.curr_applicants,
        curr_selected : req.body.curr_selected,
    });
    newUser.save()
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(400).send(err);
    });
   
});

module.exports = router;

