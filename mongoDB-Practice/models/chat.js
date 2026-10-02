const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
    },
    to : {
        type : String,
    },
    msg : {
        type : String,
    },
    created_at :{
        type : Date,
        required : true,
    }
});

const chat = mongoose.model("Chat", chatSchema);

module.exports = chat;