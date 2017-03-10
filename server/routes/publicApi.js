const express = require("express");
var News = require("../models/news.js");
var Comment = require("../models/comments.js");

const router = new express.Router();

/* 
these routes do not require an authenticated user
*/

router.post("/news", (req, res) => {
    // validate req.body for all the correct parts
    console.log("/public/api/news post received. Body:", req.body)
    if (!req.body.title) {
        res.send("no title provided")
    } else if (!req.body.link) {
        res.send("no link provided")
    } else {
        // strip out any extra bits from the body 
        var article = {};
        article.title = req.body.title;
        article.link = req.body.link;
        // create an entry using the Article model
        var NewNews = new News(article);
        // save the entry to the db
        NewNews.save(function(err, doc) {
            // handle errors (Note: this can be abstracted to a handleErrors(err) function)
            if (err) {
                console.log(err);
                var errorMessage = {}
                var errorStatus = 500;
                // find error type 
                if (err.name === "MongoError"){
                    errorMessage.type = "MongoDB";
                    // find error message 
                    errorMessage.message = err.errmsg;
                } else {
                    errorMessage.type = "Not MongoDB"
                    errorMessage.type = "a non mongo error occured"
                };
                // send the error.
                res.status(errorStatus).send(errorMessage);
            // success case if no errors 
            } else {
                console.log("Document added to News collection.");
                res.status(200).send("Doc added successfully");
            };
            
        });
    }
});

router.get("/news", (req, res) => {
    console.log("public/api/news get request received.")
    //grabs all of the articles and render them in handlebars
    News.find({})
    .limit(10)
    .sort({ dateCreated: 1 })
    .populate("comments")
    .exec(function(err, docs){
        if (err) {
            res.send(err);
        } else {
            res.status(200).json(docs);
        };
    });    
});

module.exports = router;