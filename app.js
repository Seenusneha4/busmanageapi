const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")

 var app=Express()
 app.use(Bodyparser.urlencoded({extended:true}))
 app.use(Bodyparser.json())
 var busmodel=Mongoose.model("buses",
 new Mongoose.Schema({
     route:String,
    busname:String,
    busregno:String,
    ownername:String,
    contactno:String
 })
 )
 Mongoose.connect("mongodb+srv://bookapp:3456@cluster0.9e3p4.mongodb.net/busDb")
 
 app.post("/api/busmanage",(req,res)=>{
     var getroute=req.body.route
     var getbusname=req.body.busname
     var getbusregno=req.body.busregno
     var getownername=req.body.ownername
     var getcontactno=req.body.contactno
     data={"route":getroute,"busname":getbusname,"busregno":getbusregno,"ownername":getownername,"contactno":getcontactno}
     let mybus=new busmodel(data)
     mybus.save((error,data)=>{
         if(error)
         {
             res.send({"status":"error","data":error})    
 
         }
         else
         {
             res.send({"status":"success","data":data})
         }
 
     })
})


app.get("/api/busmanage",(req,res)=>{
    res.send("hello")
})
 
 app.listen(6500,()=>{
     console.log("server running")
 })