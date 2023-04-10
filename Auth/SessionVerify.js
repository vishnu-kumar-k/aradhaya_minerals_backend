var jwt=require("jsonwebtoken");
const con = require("../Connection/Connection");
require("dotenv").config()

const SessionVerify=(req,res)=>{
    const{jwt_token}=req.body;
    try{
    var decode=jwt.verify(jwt_token,process.env.jwt_token)

        if(decode)
        {
            console.log(decode)
            con.query(`select admin_name from admin where admin_id=${decode.id}`,(err,result)=>{
                if(err)
                    throw err
                else 
                {
                    res.json({status:true,name:result[0].admin_name})
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


module.exports=SessionVerify;