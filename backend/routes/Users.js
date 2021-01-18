var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
var user_pro = ""

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
    User.find({email : user_pro}, function(err, Pro) {
        if (err) {
            console.log(err);
        } else {
            // console.log(Pro)
            res.json(Pro);
        }
    });
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/register", (req, res) => {
    console.log("here")
    console.log(typeof req.body.education[0])
    console.log(req.body.education[0][0])
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
        job_selected : ''

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
        { email: user_pro},
        { $push: {jobs_created: req.body.title} },
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

// POST request 
// Login
router.post("/login", (req, res) => {
   // console.log("hererere")
	user_pro = req.body.email
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

module.exports = router;

