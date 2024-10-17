import React from 'react'

const Output = ({ task, index, tasklist, settasklist}) => {

const handleDelete=()=>{
    let removeindex = tasklist.indexOf(task);
    tasklist.splice(removeindex, 1);
    settasklist((currenttask=> currenttask.filter(todo=>index===removeindex)))
}

  return (
    <div>
       <div className=' w-96 float-left shadow-2xl max-w-sm border-solid border-3 border-amber-600 bg-gray-100 m-10 p-4 rounded-3xl '>
        <p className='font-semibold'>{task}</p>
        <button className='space-y-5 mt-8 border border-red-500  bg-red-700 text-white rounded-md px-4 py-2 m-2 transition duration 800 ease select-none hover:bg-red-200 focus:outline-none focus:shadow-outline ' onClick={handleDelete}>Delete</button>
        </div>
      
    </div>
  )
}

export default Output
