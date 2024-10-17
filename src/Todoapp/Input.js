import React, { useState } from 'react';

const Input = ({ tasklist, settasklist }) => {
  const [input, setInput] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
      settasklist([...tasklist, input]);
      setInput("");
     
  };

  return (
    <div>
      <h1 className='text-xl font-semibold p-2'>Enter your task</h1>
      <form onSubmit={handleAddTask}>
        <input
        className='border border-solid border-2 p-2 rounded-md'
          type='text'
          placeholder='Write your task'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='ml-4 border border-purple-500  bg-purple-700 text-white rounded-md px-4 py-2 m-2 transition duration 800 ease select-none hover:bg-purple-200 focus:outline-none focus:shadow-outline' type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Input;
