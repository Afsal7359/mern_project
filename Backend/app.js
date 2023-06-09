const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
let bodyParser = require("body-parser")
const app = express()
// app.use(bodyparser())
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const userrouter = require('./routers/userRouter');
// const adminrouter = require('./router/adminRouter');
app.use('/',userrouter);
// app.use('/admin',adminrouter);



app.listen(5000,()=>{
    console.log("port connected");
})

