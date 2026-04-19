import usermodel from "../models/usermodel.js"



export const insertdata = async(req,res)=>{


    try{
     
//    console.log(req)

    //   const {name,number,email}= req.body
      const datanew = await usermodel.create(req.body)
      res.status(200).json({msg:"data found",datanew})

    }catch(err){

        res.status(500).json({msg:"some err",err})
        console.log("some error",err)
    }







}


export const gettingdata = async(req,res)=>{

    try{
    //   console.log(req)
    const getdata = await usermodel.find()
    res.status(200).json({getdata})

    }catch(err){

       res.status(500).json({msg:"some err",err})
        console.log("some err",err)
    }
}