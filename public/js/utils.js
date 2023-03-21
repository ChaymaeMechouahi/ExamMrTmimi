import { urlApi ,myList} from "./config.js"
export const formToJson=(idForm)=>{
    let form=document.getElementById(idForm)
    let formData=new FormData(form)
    let datas={}
    formData.forEach((element,key)=>datas[key]=element)
    return datas;
}
export const  addTask=(task)=>
{
    const li=document.createElement("li");
    const btnDelete  =document.createElement("button");
    li.appendChild(btnDelete);
    btnDelete.addEventListener('click',async (event)=>
    { 
        event.preventDefault();
        await fetch(urlApi+"tasks/"+task.task,
        {
        method:"DELETE",
        headers:
            {
                "Content-type":"application/json"
            }

        })
        li.remove()
})
myList.appendChild(li)
}
export const getTasks = async() =>
{
     await fetch(urlApi+"tasks",
    {
        method:'GET',
        headers:
        {
            "Content-type":"application/json"
        }
    })
    .then(response=>response.json())
    .then(data=>{
        data.forEach(element => {
            addTask(element)
        });
    }).catch(err=>console.log(err))
}
