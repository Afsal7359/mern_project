const express = require('express');
const router = express.Router();
const data = require("../mongo")
const Collection=require('../mongo');
const name = name
const pass=password

router.post("/signup",async(req,res)=>{
    console.log(req.body);
    const{email,password}=req.body 
    console.log('K');
    if(email==name && password==pass){
        res.send(true)
    }
    else{
        res.send(false)
    }
    console.log('db',newUser);
    newUser.save()
    res.send(true)
    
    

//     try{
//         const check=await data.findOne({email:email})
//         console.log(check);

//         if(check){
//             res.send("exist")
//         }
//         else{
//             res.send("notexist")
//             await data.insertMany([data])
//         }

//     }
//     catch(e){
//         res.send("fail")
//     }

  })

router.post("/getadmin",async(req,res)=>{
    console.log('admin');
    let admin=await userCredential.find({email:'admin'})
    console.log(admin   );
    res.json(admin)

   
    
    // // let {email,password}=req.body
    // let user =await data.findOne({email:email})
    // console.log(users);
    // res.json(users)
})

router.post("/check",async(req,res)=>{
    console.log(req.body);
    let email=req.body.email
    let pass = req.body.pass
    
    // let {email,password}=req.body
    let admin=await Collection.findOne({email:email})
    console.log(admin);
    // res.send(user)
    console.log("post pass=",pass);
    if(admin){
        if(pass==admin.password){
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




module.exports = router;