const express = require("express");
const routerTask= express.Router();
const fs = require('fs');
const Task =require('../models/Task.js')
let tabTask = new Array();
tabTask [0]=new Task(1,"2")
tabTask [1]= new Task(2,"ejioz")
tabTask [2]= new Task(3,"ek")
tabTask [3]= new Task(4,"f,ez")
tabTask [4]= new Task(5,"ziej")


routerTask.get("/",(req,res)=>
{
  let limit=req.query.limit  || tabTask.length
  if (isNaN(limit)) return res.status(404).json({message:"task not found"})
  let task = tabTask.filter((element,index)=>index<limit)
  res.status(200).json(task);
}); 
routerTask.get("/:id",async(req,res)=>
{
  let id =  req.params.id
  
 let task=tabTask.find(element=>element.id==id)
  if(task)
      res.json(task)
  else
      res.status(404).json({message:"task not found"})


});
routerTask.post('/', (req, res) => {
    let task = req.body;
    console.log(task)
    if (task)
    {tabTask.push(task);
        res.status(200).json({message:"task added"})}
    else         res.status(404).json({message:"Taskrequired"})

});


routerTask.delete("/:id",async(req,res)=>
{
   
  let id = req.params.id
  let task=tabTask.find(element=>element.id == id)
  if(!task)
      return res.status(404).json({message:"task  not found"})

 tabTask.splice(tabTask.indexOf(task),1);
 return res.status(200).json({message:"task deleted"})


    

    
});
module.exports=routerTask