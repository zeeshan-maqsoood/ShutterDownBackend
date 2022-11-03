const express=require("express")
const router=express.Router();
const userController=require('../Controllers/UserController')

router.get("/",(req,res)=>{
    res.send("router is running")
})

router.post("/signup",userController.RegisterPostRequest )
router.post('/signIn', userController.SignInPostRequest);
router.post("/forgetPassword",userController.verifyEmail)
router.put("/newPassword",userController.newPassword)
module.exports=router