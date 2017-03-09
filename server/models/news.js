const mongoose = require("mongoose");

// helper functions. 
function getReplies (commentId) {
    // find the comment in the comments database
    // find the text and replies that go with it.
    // return an array of comments filled with the info
}

// define the news model schema.
const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        index: {unique: true },
        trim: true
    },
    shortText: {
        type: String,
        trim: true

    },
    comments: [{ // will contain an array of comments 
        type: mongoose.Schema.Types.ObjectId, // will save the object Id of a comment 
        ref: "Comment" // directs that the object Ids stored here are related to the Comment model
        //get: getReplies
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    },    
})

module.exports = mongoose.model("News", NewsSchema);