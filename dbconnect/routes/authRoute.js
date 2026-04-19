import express from "express"

import { insertdata,gettingdata } from "../controller/authController.js"

const route = express.Router()



route.post("/insert",insertdata)

route.get("/getdata",gettingdata)


export default route








// http://localhost:5000/api/user/insert
// http://localhost:5000/api/user/getdata