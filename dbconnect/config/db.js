import mongoose from "mongoose"


const connectdb = async()=>{

try{

    const dataconnect = await mongoose.connect(process.env.MONGO_URI)
    console.log(`server connected ${ dataconnect.connection.host}`)


}catch(err){


    console.log("some error ", err)
}


}


export default connectdb





