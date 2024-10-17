import React, { useState } from 'react'
import Input from './Input'
import Output from './Output';

const Todoapp = () => {
    const[tasklist, settasklist]= useState([]);
    console.log(tasklist);
    console.log(settasklist);
  return (
    <div>
        <div className='   shadow-md Container max-w-3xl rounded-md mx-auto text-center bg-slate-200 p-5 align-center'>
            <h1 className='text-4xl font-semibold'>Todo list</h1>
            <Input tasklist={tasklist} settasklist={settasklist}></Input>
        </div>
        <div>
            
            {tasklist.map((task, index)=>
                <Output key={index} task={task} index={index} tasklist={tasklist} settasklist={settasklist}></Output>
            
        )}
        </div>
      
    </div>
  )
}

export default Todoapp
