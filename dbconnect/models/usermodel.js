import mongoose from "mongoose";


const mydata = new mongoose.Schema({
name:String,
number:Number,
email:String,
createdby:{
    type:String,
    default:"admin"
},
updatedby:{
    type:String,
    default:"admin"
},



},{timestamps:true})


const usermodel = mongoose.model("DBlist",mydata)
export default usermodel