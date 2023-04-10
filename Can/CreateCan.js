var jwt = require("jsonwebtoken");
const con = require("../Connection/Connection");
require("dotenv").config();


const CreateCan=async(req,res)=>{
    const{pro_name,pro_price,pro_litre,pro_min_quantity,pro_available,pro_img,jwt_token}=req.body;
    console.log(req.body)
    try
    {
        
        jwt.verify(jwt_token, process.env.jwt_token, async (err, decode) => {
        if(decode)
        {
            var id=decode.id;
            console.log(id);
            var values=[
                [pro_name,pro_price,pro_litre,pro_min_quantity,pro_available,pro_img,id]
            ]
          await  con.query(`insert into canDetails (canName,price,litre,MOQ,currentAvailable,canImage,adminId) values ?`,[values],(err,result)=>{
                if(err){
                    console.log(err);

                }
                else{
                    console.log("ksl")
                    res.json({status:true,msg:"Product added"})
                }    
            })

        }})
    }
    catch(error)
    {
        console.log(error)
        res.json({status:false,error:error})
    }

}

module.exports=CreateCan;