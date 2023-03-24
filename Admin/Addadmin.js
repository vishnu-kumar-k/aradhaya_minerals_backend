const con = require("../Connection/Connection");
var bcrypt=require("bcrypt")

const Addadmin=async(req,res)=>{
    const{admin_number,admin_name,admin_password}=req.body;
    var password=await bcrypt.hash(admin_password,1);
    values=[
        [admin_name,admin_number,password]
    ]
    try{
        con.query(`insert into admin(admin_name,admin_number,admin_password) values ?`,[values],(err,result)=>
        {
            if(result)
            {
                res.send({status:true,msg:"Added successfully"})
            }
            else{
                res.send({status:false,msg:"Error",error:err})
            }
        })
    }
    catch(err)
    {
        console.log(err)
        res.send({status:false,msg:"Error",error:err})
    }
}
module.exports=Addadmin;