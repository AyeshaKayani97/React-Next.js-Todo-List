"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask,{title, desc}])
    setTitle("")
    setDesc("")
    
    console.log(mainTask)

  }
  let renderTask = "No Task Available"
  if(mainTask.length >0){
    renderTask = mainTask.map((t, i)=>{
      return (
        <li key={i}>
        <div className='flex justify-between mb-5'>
  
            <h5>{t.title}</h5>
           <h5> {t.desc}</h5>
           <button onClick={()=>deleteHandler(i)} className='bg-red-500 px-3 py-2'>Delete</button>
  
        
        </div>
          </li>
  
      )
    })

  }
  const deleteHandler = (i)=>{
    const copyArr = [...mainTask]
    copyArr.splice(i,1)
    setMainTask(copyArr)

  }

  return (
    <>
      <h1 className='bg-black text-center p-5 text-white font-bold text-5xl'>Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="task" id="" value={title} onChange={(e)=> setTitle(e.target.value)} className='m-8 p-3 border-zinc-800 border-2' placeholder='Enter task'/>
        <input type="text" name="task" id="" value={desc} onChange={(e)=> setDesc(e.target.value)} className='m-5 p-3 border-zinc-800 border-2' placeholder='Enter your description'/>
        <button className='px-5 py-3 bg-green-400'>Add Task</button>
      </form>
      <hr />
      <div className='bg-slate-200 p-7'>
        <ul>
          {renderTask}

        </ul>
      </div>
    </>
  )
}

export default page
