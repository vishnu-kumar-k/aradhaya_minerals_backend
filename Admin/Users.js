const con = require("../Connection/Connection")


const Users=(req,res)=>
{
    try{
        con.query("select username,useremail,usernumber,useraddress from user order by userid desc",(err,result)=>
        {
            if(err)
            {
                console.log(err);
                res.json({status:false})
            }
            else
            {
                res.json({result,status:true});
            }
        })
    }
    catch(err)
    {
        console.log(err);
        res.json({status:false}) 
    }
}

module.exports=Users;