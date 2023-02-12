const mongoose=require("mongoose")
const Schhema=mongoose.Schema;
const userSchema=new Schema({
    task: {type: String, required:true},
    is_completd: {type: String, required:true},
    end_date: {type: Number, required:true}
},{
    timestamps: true
})
const User=mongoose.model('User',userSchema);
module.export=User;
// link to store the data for crud

