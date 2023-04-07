const con = require("../Connection/Connection")

const ViewOrder =(req,res)=>
{
    try{
        con.query(`SELECT * FROM orderDetails ORDER BY orderId DESC`,(err,result)=>{
            if(err)
                console.log(err)
            else
            {
                res.json({res:result});
            }    
        })
    }
    catch(err)
    {
        res.json({err:err})
    }
}




module.exports=ViewOrder;