import { resfresh, taskForm , urlApi} from "./config.js";
import{formToJson} from"./utils.js"
taskForm.addEventListener('submit',async (event)=>{
    event.preventDefault();
    let taskS=formToJson('taskForm');
    let taskToSend= {
                    id: Math.random()*10, 
                    task:taskS.task                  
                };
    try{
    let response =await fetch(urlApi+"tasks",{
        method:"POST",
        body:JSON.stringify(taskToSend),
        headers:{
            "Content-Type":"application/json"
        }
    })
     let res=  await response.json()
    alert(res.message)
    }
    catch(e)
    {
        console.log(e)
        alert("error")
    }

})
resfresh.addEventListener('click',async (event)=>{
    event.preventDefault();
    try{
    let response =await fetch(urlApi+"tasks",{
        method:"GET"
    })
    }
    catch(e)
    {
        console.log(e)
        alert("error")
    }
})
