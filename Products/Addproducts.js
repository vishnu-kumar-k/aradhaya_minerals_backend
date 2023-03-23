require("dotenv").config();
const jwt=require("jsonwebtoken");
const con = require("../Connection/Connection");



const Addproducts=async(req,res)=>{
    const{pro_name,pro_price,pro_litre,pro_min_quantity,pro_available,pro_img,jwt}=req.body;
    try
    {
        var decode=await jwt.verify(process.env.jwt_token,jwt)
        if(decode)
        {
            var id=decode.admin_id;
            var values=[
                [pro_name,pro_price,pro_litre,pro_min_quantity,pro_available,pro_img,id]
            ]
          await  con.query(`insert into products (products_name,products_price,products_litre,products_minimum_quantity,products_available,products_img,admin_id) values ?`,[values],(err,result)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.json({status:true,msg:"Product added"})
                }    
            })

        }
    }
    catch(error)
    {
        res.json({status:false,error:error})
    }

}

module.exports=Addproducts;