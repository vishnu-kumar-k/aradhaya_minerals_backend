const jwt=require("jsonwebtoken");
require("dotenv").config();
const bcrypt=require("bcrypt");
const con = require("../Connection/Connection");


const Login=async(req,res)=>{
    const{usernumber,userpassword}=req.body;
    try{
      await  con.query(`select * from user where usernumber=${usernumber}`,async(error,result)=>{
            
           if(result.length===0)
            {
                res.json({status:false,msg:"Account not Found"})
            }
            else if(await bcrypt.compare(userpassword,result[0].userpassword))
            {
                var p=await jwt.sign({id:result[0].userid},process.env.jwt_token,{expiresIn:"3d"});
                res.json({status:true,jwt:p,msg:"Login Successfull",username:result[0].username});
            }
            else{
                res.json({status:false,msg:"Wrong Password"});
            }
        })
    }
    catch(err)
    {
        res.json({status:false,msg:"Error",error:err});
    }
}

module.exports=Login;