
var jwt=require("jsonwebtoken");
const con = require("../Connection/Connection");
require("dotenv").config()

const AddToCart=async(req,res)=>
{
    const {jwt_token}=req.headers;
    const {data}=req.body;

    
    try{
        var decode=jwt.verify(jwt_token,process.env.jwt_token)
        
            if(decode)
            {
                var values=[];
                for(i=0;i<data.length;i++)
                {
                    var v=[decode.id,data[i].canId,data[i].quantity]
                    values.push(v);
                }
                await con.query(`delete from temporayCart where userId=${decode.id}`,(err,result)=>
                {
                    if(err)
                        console.log(err)
                })
                con.query(`insert into temporayCart (userId,canId,quantity) values ?`,[values],(err,result)=>{
                    if(err)
                        console.log(err)
                    else 
                    {
                        
                        res.json({status:true})
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
        res.json({status:false,err});
    }

}
module.exports=AddToCart;