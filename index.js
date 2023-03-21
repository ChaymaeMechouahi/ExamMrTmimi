const express = require("express")
const session = require("express-session")
const port = 3003
const routerTask = require('./routers/taskRouter.js')
const app = express()
app.use(express.static("./public"))
app.use(session({
    secret: 'hello world hihi ',
    resave: false,
    saveUninitialized: true,
    cookie: { 
      httpOnly: true
    }
  }))
  app.use(express.json()) 

  app.get("./index.html",(req,res)=>{
    
  })
  app.use((req,res,next)=>{
    if(!req.session.count)
        req.session.count=1
    else
        req.session.count++
    console.log(req.session)
    next()
})
app.get("/",(req,res)=>{
    res.send("visited " + req.session.count + " times")
})
app.use("/tasks",routerTask);
app.use((req,res)=>{
    res.status(404).json({message:"404 not found"})
})
app.listen(port,()=>{
    console.log("server started at localhost: " + port)
})