var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
const Job = require("../models/Jobs")
var user_pro = ""
var job_pro = ""

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

router.get("/profile",function(req,res) {
   // name = req.body.name
    //console.log(name)
    User.find({_id : user_pro}, function(err, Pro) {
        if (err) {
            console.log(err);
        } else {
            // console.log(Pro)
            res.json(Pro);
        }
    });
});

router.get("/myemployees",function(req,res) {
    // name = req.body.name
     //console.log(name)
     User.find({recuiter_selected : user_pro}, function(err, Pro) {
         if (err) {
             console.log(err);
         } else {
             // console.log(Pro)
             res.json(Pro);
         }
     });
 });


router.get("/profile/jobs",function(req,res) {
     console.log(job_pro)
     User.find({jobs_applied : job_pro }, function(err, Pro) {
         if (err) {
             console.log(err);
         } else {
             // console.log(Pro)
             res.json(Pro);
             //console.log(Pro);
         }
     });
 });

router.get("/curr-job-details",function(req,res) {
    console.log("hrerrr")
    console.log(job_pro)
    Job.find({_id : job_pro }, function(err, Pro) {
        if (err) {
            console.log(err);
        } else {
            // console.log(Pro)
            res.json(Pro);
            console.log(Pro);
        }
    });
});
// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/register", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        type : req.body.type,
        password : req.body.password,
        education : req.body.education,
        skills : req.body.skills,
        rating : req.body.rating ,
        jobs_applied : [] ,
        jobs_rejected : [],
        job_selected : '',
        recuiter_selected : ''

    });
    newUser.save()
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        res.status(400).send(err);
    });
   
});

router.post("/register2", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password : req.body.password,
        type : req.body.type,
        contactno : req.body.contactno,
        bio : req.body.bio
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});



router.route('/job-created').get(function(req, res) {
    // console.log("heee")
   // console.log(user_pro)
    User.findOneAndUpdate(
        { _id: user_pro},
        { $push: {jobs_created: job_pro} },
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

  router.route('/edit-applicant').get(function(req, res) {
    // console.log("heee")
    User.findOneAndUpdate(
        { _id: user_pro},
        { $set: { email : req.query.email ,
                 name : req.query.name ,
                password : req.query.password,
              //  education : req.query.education,
                skills : req.query.skills,
                rating : req.query.rating
                } },
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

  router.route('/edit-recuiter').get(function(req, res) {
    // console.log("heee")

    User.findOneAndUpdate(
        { _id: user_pro},
        { $set: { email : req.query.email ,
                 name : req.query.name ,
                password : req.query.password,
              //  education : req.query.education,
                bio : req.query.bio,
                contactno : req.query.contactno
                } },
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

router.get("/job-login" , (req,res) => {
    //console.log(req.query.title)
    job_pro = req.query._id
    //console.log(job_pro)
});
// POST request 
// Login
router.post("/login", (req, res) => {
   // console.log("hererere")
    //user_pro = req.body._id
    //console.log(user_pro)
    //console.log(user_pro)
    User.find({email : req.body.email}, function(err,user_exist){
        if(err)
        {
            console.log(err);
        }
        if(!user_exist.length)
        {
            console.log("User does not exist")
            res.send("1")
        }
        else
        {
            console.log(user_exist[0].password);
            if(user_exist[0].password === req.body.password)
            {
                user_pro = user_exist[0]._id;
                console.log(user_pro)
                if(user_exist[0].type==="applicant")
                    {
        //                console.log("customer")
                        res.send("3")
                    }
                if(user_exist[0].type==="recuiter")
                {
      //              console.log("vendor")
                    res.send("4")
                }
            }
            else
            {
                console.log("Wrong Password")
                res.send("2")
            }
       
        }
    });
});

router.get("/active-jobs", function(req, res) {
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
  
  

  router.get("/my-jobs", function(req, res) {
     // console.log(user_pro)
      Job.find({_id_of_recuiter : req.query._id},function(err, users) {
          if (err) {
              console.log(err);
          } else {
              res.json(users);
          }
      })
  });

  router.get("/get-info", function(req, res) {
    // console.log(user_pro)
     User.find({_id : user_pro},function(err, users) {
         if (err) {
             console.log(err);
         } else {
             res.json(users);
         }
     })
 });

 router.get("/get-myjobs", function(req, res) {
    // console.log(user_pro)
     Job.find({ $or: [ { curr_applicants: user_pro }, { curr_shortlisted : user_pro } , {curr_rejected : user_pro} , {curr_selected : user_pro}] },function(err, users) {
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
        { _id: req.query._id},
        { $push: {curr_applicants : user_pro} },
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

  router.route('/apply-job').get(function(req, res) {
     console.log("heee")
    //console.log(user_pro)
    console.log(req.query.sop)
    User.findOneAndUpdate(
        { _id : user_pro},
        { $push: {jobs_applied : req.query._id} },
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
  
    console.log(req.body.email_of_recuiter)
      const newUser = new Job({
          title: req.body.title , 
          name_of_recuiter: req.body.name_of_recuiter , 
          email_of_recuiter : req.body.email_of_recuiter , 
          _id_of_recuiter  : req.body._id_of_recuiter,
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
      newUser.save(function(err,room){
          job_pro = room.id;
      }
      )  
     
  });

  router.route('/shortlist-job').get(function(req, res) {
    console.log("heee")
   //console.log(user_pro)
   console.log(req.query.sop)
   User.findOneAndUpdate(
       { _id : req.query._id},
       { $push: {jobs_shortlisted : job_pro} },
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

router.route('/add-to-shortlist').get(function(req, res) {
console.log("heee")
//console.log(user_pro)
console.log(req.query.sop)
Job.findOneAndUpdate(
    { _id : job_pro},
    { $push: {curr_shortlisted : req.query._id},
    $pull : {curr_applicants : req.query._id} },
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


 router.route('/accept-job').get(function(req, res) {
    console.log("heee")
   //console.log(user_pro)
   console.log("main query")
   console.log(req.query.recuiter)

   User.findOneAndUpdate(
       { _id : req.query._id},
       { $set: {job_selected : job_pro , recuiter_selected : req.query.recuiter},
        $pull : {jobs_applied : job_pro , jobs_shortlisted : job_pro}},
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

router.route('/add-to-accepted').get(function(req, res) {
console.log("heee")
//console.log(user_pro)
console.log(req.query.sop)
Job.findOneAndUpdate(
    { _id : job_pro},
    { $push: {curr_selected : req.query._id},
    $pull : {curr_shortlisted : req.query._id} },
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

module.exports = router;

