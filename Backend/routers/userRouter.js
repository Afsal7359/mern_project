
const express = require('express');
const router = express.Router();
const collection = require("../mongo");
// const { Collection } = require('mongoose');



router.post("/signup",async(req,res)=>{
    console.log(req.body);
    const{email,password,username,confirm,firstname,middlename,lastname}=req.body
    console.log("k");
    let newUSer = new collection({
      
        email,
        password,
        username,
        firstname,
        middlename,
        lastname,
        confirm

    })
    console.log("db=",newUSer);
    newUSer.save()
    res.send(true)

    

})

router.post("/check",async(req,res)=>{
    console.log(req.body);
    let email = req.body.email
    let pass = req.body.pass

    // let {email,password}=req.body
    let user = await Collection.findOne({email:email})
    console.log(user);
    // console.log("db pass=",user.password);
    console.log("post pass=",pass);
    if(user){
       if(pass==user.password){
            res.send(true)
        }
        else{
            res.send(false)
        }       
    }
    else{
        res.send(false)
        
    }
    
})

router.get("/getdata",async(req,res)=>{
    console.log("afsadf")
    let data =await collection.find({})
    console.log(data);
    
    res.send(data)
})
router.post("/login",async(req,res)=>{
    console.log(req.body)
    let name = req.body.username
    let pass = req.body.pass
    console.log("user posted data = ",name,"     ", pass);
    let data =await collection.findOne({username:name}) 
    console.log(data);
    if(data){
        if(data.password==pass){
            res.send(true)
        }else{
            res.send(false)
        }
    }else{
        res.send(false)
    }
    
})




module.exports = router;