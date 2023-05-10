var jwt=require("jsonwebtoken");
const con = require("../Connection/Connection");
require("dotenv").config()

const UserVerify=(req,res)=>{
    console.log(req.body)
    const{jwt_token}=req.headers;

    try{
    var decode=jwt.verify(jwt_token,process.env.jwt_token)

        if(decode)
        {
            console.log(decode)
            con.query(`select * from user where userId=${decode.id}`,(err,result)=>{
                if(err)
                    throw err
                else 
                {
                    res.json({status:true,result})
                }    
            })
        }
        else
        {
            res.json({status:false})
        }
    
}
catch(err)
{
    res.json({status:false});
}
}


module.exports=UserVerify;