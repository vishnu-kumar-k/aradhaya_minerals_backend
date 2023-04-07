const con = require("../Connection/Connection");


const updateStatus=(req,res)=>{
    const{orderId,status}=req.body;
    try{
        con.query(`update orderDetails set orderStatus=${status} where orderId=${orderId}`,(err,result)=>{
            if(err)
                console.log(err)
            else 
            {
                res.json({status:true})
            }    
        })
    }
    catch(err)
    {
        console.log(err);
        res.json({status:false,error:err})
    }
}

module.exports=updateStatus;