const con = require("../Connection/Connection")



const ViewAdmin=(req,res)=>
{
    try{
        con.query(`select * from admin`,(err,result)=>
        {
            if(err)
            {
                console.log(err);
                res.json({status:false});
            }
            else{
                res.json({result,status:true});
            }
        })
    }
    catch(err)
    {
        console.log(err);
                res.json({status:false});
    }
}
module.exports=ViewAdmin;