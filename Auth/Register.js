const con = require("../Connection/Connection")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");
require("dotenv").config()
const Register=async(req,res)=>{
        const{username,useremail,usernumber,userpassword}= req.body;
        
        var pass=await bcrypt.hash(userpassword,1);
        try{
          await  con.query(`select * from user where usernumber=${usernumber}`,async(error,result)=>{
                if(result.length!==0)
                {
                    res.json({status:false,msg:"Account Exists with this number"});
                }
                else{
                    const values=[[username,useremail,usernumber,pass]];
                    await  con.query(`insert into user(username,useremail,usernumber,userpassword) values ?`,[values],async(e,re)=>{
                    var p=await jwt.sign({id:re.insertId},process.env.jwt_token,{expiresIn:"3d"});
                    res.json({status:true,"msg":"Account created Successfully","jwt":p});
                  })
                }
            })
        }
        catch(err)
        {
            res.json({status:false,msg:"Error",error:err});
        }
}

module.exports=Register;