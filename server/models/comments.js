var mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema({
    body: {
        type: String,
        trim: true,
        required: "A comment body is required to comment.",
        validate: [
            function(input) {
                return input.length >= 2;
            },
            "Comments must be longer than one character."
        ]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    },
    replies: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Reply"
    }],
    score: {
        type: Number,
        default: 0,
        get: v => Math.round(v),
        set: v => Math.round(v)
    },
})

// methods for the schema 
CommentSchema.methods.updateDateUpdated = function(){
    this.dateUpdated = Date.now;
    return this.dateUpdated;
};

// export the model
module.exports = mongoose.model("Comment", CommentSchema);