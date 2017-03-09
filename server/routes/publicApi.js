const express = require("express");
var News = require("../models/news.js");

const router = new express.Router();

/* 
after the user is authenticated, we let them see this route.  since everyone has the same role, they all see this route. 
I suppose this is where I could implement authorization logic to give different routes based on what is in their token when it is validated and their "role" in the database.
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

module.exports = router;