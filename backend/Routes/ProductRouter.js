const ensureAuthenticated = require("../Middlewares/Auth");

const router = require("express").Router();

router.get('/', ensureAuthenticated, (req,res)=>{
  console.log('----- logged in user deatils ----',req.user);
  res.status(200).json([
    {
      name:"mobile",
      price:10000
   },
   {
    name:"tv",
    price:10000
 },
  ])
})


module.exports=router;
