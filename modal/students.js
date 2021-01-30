const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    method:{
        type:String,
        enum:['local','google','facebook'],
        required:true
    },
    email:{
        type:String,
        required:true
    },
    local:{
        password:String
    },
    google:{
        googleId:String
    },
    facebook:{
        facebookId:String
    },
    profileId:{
        type:mongoose.Types.ObjectId,
        ref:'Profile'
    }
})

module.exports = mongoose.model("Student",StudentSchema);