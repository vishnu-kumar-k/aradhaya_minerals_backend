const con = require("../Connection/Connection")

const Register=(req,res)=>{
    con.query(`select * from user`,(error,result)=>{
        res.send(result);
    })
}

module.exports=Register;