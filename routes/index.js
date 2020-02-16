var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectID;
var url = "mongodb://localhost:27017/";

// *project*//

// {
//   "title": "random color change ",
//    "description": "in this project you will built a small number  random color change . system will select a random number between random numbera and 100.see if you      can guess  it in 10 turns or fewer.we will tell you if you are guess was to high or two low",
//     "image": "/images/random.png",
//     "image1": "/images/random.png",
//    "image2":"/images/random.png",
//   }
       
  

const data = [
  {
    title: "random color change ",
    description:
      "in this project you will built a small number  random color change . system will select a random number between random numbera and 100.see if you can guess  it in 10 turns or fewer.we will tell you if you are guess was to high or two low",
    images: "/images/random.png"
  },

  {
    title: "image changer",
    description:
      "in this project you will built a image  changer . system will click a image change between for loop use image change  if you can iamge change ,you can change iamge and will clik that,you can do now",
    images: "/images/cv.png"
  },

  {
    title: "guessing game",
    description:
      "in this project you will built a small number  guessing game. system will select a random number between random numbera and 100.see if you can guess  it in 10 turns or fewer.we will tell you if you are guess was to high or two low",
    " images": "/images/guessing.png"
  },

  {
    title: "console ",
    " description":
      "In this project you will build a JavaScript console. In this console you will be able to run any JavaScript statements and expressions. Let's try to evaluate JavaScript expressions using your own code.",
    " images": "/images/console.png"
  },

  {
    title: "bouncing ball ",
    description:
      "In this project we will build a bouncing balls demo, to show you how useful objects can be in JavaScript. Little balls will bounce around on the screen, and change color when they touch each other using the Canvas API.",
    images: "/images/boun.png"
  },

  {
    title: "timier new lunch",
    " description":
      "In this project we will build a t timer demo, to show you how useful objects can be in JavaScript. Little timier will timier around on the timier, and  timier new lunch when they touch each other using the javascript..",
    images: "/images/timer.png"
  },

  {
    title: "speak to  save",
    description:
      "In this project we will build a t speak write, to show you how useful objects can be in JavaScript. Little speak write will speak to write and will see that around on the speak , and  i use to only javascript and will you will see that and i did handle javascript..",
    images: "/images/spe.png"
  },

  {
    title: "tic tac toc   game ",
    description:
      "In this project we will build a t student game, to show you how useful objects can be in JavaScript. Little student play to game will game to build the javascript will game to tic tac tac and will the play to agrade  around on the tic tac toe , and  student to grade  to it will to x,y and this type to game .we can play to game tic tac toe each other using to javascript the javascript..",
    images: "/images/tiktok.png"
  },

  {
    title: "calculator",
    description:
      "Create a calculator application, using the web services provided. The calculator should act like a  calculator. e.g. if you push '5', then '+', then '5', then '+', the calculator should display '10', while waiting for the user to enter the next operand.",
    images: "/images/clt.png"
  }
];

// *blog *//
const blogData = [
  {
    title: "Build rest API",
    description:
      "portfolio project using node and express. we will use hbs  build the rest API template engine. and i use to html and bootstarp,node.js,express,mongodv.it,s working to server database",
    images: "/images/node.jfif"
  },

  {
    title: "Build all the pages and layouts",
    description:
      "build an dashboard to manage my portfolio.  build all the page and layout again ,we will be using nod and express. and to that will work and server side and so .i use to html .bootstarp,node.js,express,mongodv ",
    images: "/images/image-2.jpg"
  },

  {
    title: "build bulit to rest best API",
    description:
      "here we will built rest based API to interect with the mongoDV. fetch data from mongoDB in express",
    images: "/images/image-3.jpg"
  },

  {
    title: "Design the database using mongoDBsilly story generator",
    description:
      "portfolio  project using and it will use to node.js, express, Design the database using mongoDBsilly story generator mongodv.and that is working to server side and will you do work",
    images: "/images/image-1.jpg"
  },

  {
    title: "design to mongoDv",
    description:
      "portfolion blog details and  design using express and mongoDB i can use to html,bootstarp,node.js,express,mongodve.and this using to server is running for and will woring to database is come to blog details",
    images: "/images/image-5.jpeg"
  },

  {
    title: " Data reception",
    description:
      "portfolio  blog details and it will work to database and it,s comming to database .and so i use to html ,bootstrap,node.js,express,mongodv all parts use to database ",
    images: "/images/image-6.jpeg"
  },

  {
    title: "blog form server",
    description:
      "portfolio  blog details to so simple i use to html,bootstrap,node.js,express,mongodv.and that will work server side,.",
    images: "/images/image-7.jpeg"
  },

  {
    title: "Image reception",
    description:
      "portfolio  blog details to so simple i use to html,bootstrap,node.js,express,mongodv.and that will work server side .",
    images: "/images/image-8.jpeg"
  },

  {
    title: "Image form server",
    description:
      "portfolio   blog details to so simple i use to html,bootstrap,node.js,express,mongodv.and that will work server side.",
    images: "/images/image-9.jpeg"
  }
];

/* GET home page. */
router.get("/", function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("myprofile");
    let d = new Date();
    // get the projects
    dbo
      .collection("projects")
      .find({})
      .limit(3)
      .toArray(function(err, projects) {
        if (err) throw err;
        console.log(JSON.stringify(projects));
        // get the posts
        dbo
          .collection("blogs")
          .find({})
          .sort({ date_created: -1 })
          .limit(3)
          .toArray(function(err, blog) {
            if (err) throw err;
            console.log(JSON.stringify(blog));
            db.close();

            res.render("index", {
              title: "Home Page",
              projects: projects,
              blogs: blog
            });
          });
      });
  });
});

/* GET Projects Page. */
router.get("/projects", function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("myprofile");
    dbo
      .collection("projects")
      .find({})
      .toArray(function(err, projects) {
        if (err) throw err;
        console.log("Project = " + JSON.stringify(projects));
        db.close();
        res.render("project", { projects: projects });
      });
  });
});

/* Get Project Details */
router.get("/projects/:id", function(req, res) {
  let id = req.params.id;
  console.log("id --- > ", id);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("myprofile");
    dbo
      .collection("projects")
      .findOne({ _id: new ObjectId(id) }, function(err, projects) {
        if (err) throw err;
        db.close();
        res.render("details-1", { projects: projects });
      });
  });
});

// projects-details-1*//
router.get("/details-1", function(req, res, next) {
  res.render("details-1", {
    title: "details-1  Page",
    layout: "details-1-layout"
  });
});

/* GET Blog Page. */
router.get("/blogs", function(req, res, next) {
  // Get data from MongoDB
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("myprofile");
    dbo
      .collection("blogs")
      .find({})
      .toArray(function(err, blog) {
        if (err) throw err;
        console.log("Blog = " + JSON.stringify(blog));
        db.close();
        res.render("blog", { title: "Blog", blogs: blog });
      });
  });
});

// blog- id details*//

/* blog details */

router.get("/blogs/:id", function(req, res) {
  let id = req.params.id;
  console.log("id --- > ", id);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("myprofile");
    dbo
      .collection("blogs")
      .findOne({ _id: new ObjectId(id) }, function(err, blog) {
        if (err) throw err;
        db.close();
        res.render("blog-details", { blogs: blog });
      });
  });
});

// // projects-details-1*//
// router.get("/blog-details", function(req, res, next) {
//   res.render("blog-details", {
//     title: "blog-details Page",
//     layout: "blog-details-layout"
//   });
// });

// about*//
router.get("/about", function(req, res, next) {
  res.render("about", {
    title: "about Page",
    layout: "about-layout"
  });
});

// contact*//
router.get("/contact", function(req, res, next) {
  res.render("contact", {
    title: "contact Page",
    layout: "contact-layout"
  });
});

// contact-validation form*//
router.post(
  "/contact",
  [
    check("email")
      .isEmail()
      .withMessage("please enter a valid email id"),
    check("mobile")
      .isLength({ min: 10 })
      .withMessage("mobile number must be atleast 10 charcaters")
  ],

  function(req, res) {
    const errors = validationResult(req);
    console.log(JSON.stringify(errors));
    if (!errors.isEmpty()) {
      var messages = [];
      errors.errors.forEach(function(err) {
        console.log(JSON.stringify(err));
        messages.push(err.msg);
      });

      res.render("contact", { success: true, messages: messages });
    } else {
      let name = req.body.name;
      let mobile = req.body.mobile;
      let email = req.body.email;
      let description = req.body.description;
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("myprofile");
        let contact = { name, email, mobile };
        dbo
          .collection("contacts")
          .insertOne(contact, function(err, contactObj) {
            if (err) throw err;
            console.log(contact);
            console.log("1 document inserted" + contactObj._id);
            db.close();
            res.render("contact", { success: true, layout: "contact-layout" });
          });
      });
    }
  }
);

/// subscribe rout
router.post("/subscribe", function(req, res) {
  let email = req.body.email;
  console.log(email);
  if (email && email !== "") {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("myprofile");
      let newsletter = {
        email: email
      };

      console.log(newsletter);
      dbo.collection("newsletter").insertOne(newsletter, function(err, Obj) {
        if (err) throw err;
        console.log("1 document inserted" + Obj._id);

        // get the projects
        dbo
          .collection("projects")
          .find({})
          .limit(3)

          .toArray(function(err, projects) {
            if (err) throw err;
            // console.log(JSON.stringify(projects));
            // get the posts
            dbo
              .collection("blogs")
              .find({})
              .limit(3)

              .toArray(function(err, blog) {
                if (err) throw err;
                // console.log(JSON.stringify(posts));
                db.close();
                res.render("index", {
                  projects: projects,
                  blogs: blog,
                  success: true
                });
              });
          });
      });
    });
  }
});

module.exports = router;

// db.projects.update(
//   {  "_id" : ObjectId("5e470573b8ec252938f03dff") },
//   { $set: { images: ["/images/timer.png", "/images/spe.png"] } }
// );
