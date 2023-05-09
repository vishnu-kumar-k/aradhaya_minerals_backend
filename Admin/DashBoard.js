const con = require("../Connection/Connection");

const DashBoard = (req, res) => {
  try {
    // con.query('select orderStatus,count(*) as count from orderDetails group by orderStatus',(err,result)=>
    // {
    //     if(err)
    //         res.json({e});
    //     else
    //     {
    //         res.json(result);
    //     }

    // });
    con.query(
      `select sum(cart.quantity),canDetails.litre from orderDetails 
    join cart 
    on orderDetails.orderId=cart.orderId 
    join canDetails
    on 
    canDetails.canId=cart.canId
    group by  canDetails.canId
    `,
      (err, result) => {
        if (err) res.json({ err });
        else {
          res.json(result);
        }
      }
    );
  } catch (e) {
    console.log(e);
    res.json({ e });
  }
};

module.exports = DashBoard;
