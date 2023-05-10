var jwt=require("jsonwebtoken");
const con = require("../Connection/Connection");
require("dotenv").config()



const Mycart=(req,res)=>
{
    const{jwt_token}=req.headers;
    try
    {
        var decode=jwt.verify(jwt_token,process.env.jwt_token)
        con.query(`select * from temporayCart 
        join canDetails on
        temporayCart.canId=canDetails.canId
        where temporayCart.userId=${decode.id}`,(err,result)=>
        {
            if(err)
                console.log(err)
            else
            {
                res.json({result})
            }    
        })
    }
    catch(err)
{
    res.json({status:false});
}

}

module.exports=Mycart;