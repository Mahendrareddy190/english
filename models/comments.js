const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    name :{
        type :String,
        required :true,
        trim:true,
    },
    comment :{
        type :String,
        required :true,
        trim:true,
    }

})

module.exports = mongoose.model("Comment",commentSchema);
