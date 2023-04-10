
var jwt=require("jsonwebtoken");
const con = require("../Connection/Connection");
require("dotenv").config()
const Order=(req,res)=>
{
    const{customerName,customerAddress,phoneNumber,pinCode,orderDate,deliveryDate,canDetails,token,total}=req.body;

    try
    {
        var decode=jwt.verify(token,process.env.jwt_token)
        if(decode)
        {
            const id=decode.id;
            var values=[
                [customerName,customerAddress,phoneNumber,pinCode,orderDate,deliveryDate,id,total,1]
            ]
            con.query(`insert into orderDetails (customerName,customerAddress,phoneNumber,pinCode,orderDate,deliveryDate,customerid,total,orderStatus) values ?`,[values],async(err,result)=>{
                if(err)
                    console.log(err)
                else{
                    var values=[]
                   await canDetails.forEach(i => {
                        t=[i.canId,i.quantity,result.insertId]
                         con.query(`update canDetails set currentAvailable=currentAvailable-${i.quantity} where canId=${i.canId} `);
                        values.push(t);
                    });

                    await con.query(`insert into cart (canId,quantity,orderid) values ?`,[values],(e,r)=>
                    {
                        if(r)
                        {
                            res.json({status:true,msg:"Your has considered"})
                        }
                        else
                        {
                            res.json({status:false,msg:"Something went Wrong"});
                        }
                    })
                }    
            })
            
        }
        else
        {
            res.json({status:false,msg:"can't handle order at this moment"})
        }
    }
    catch(err)
    {
        res.json({status:false,msg:"can't handle order at this moment",err:err})
    }

}

module.exports=Order;






