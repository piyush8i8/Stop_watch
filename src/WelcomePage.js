import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';


const WelcomePage = () => {
  // const navigate = useNavigate();

  // const handleSignIn = () => {
  //   navigate('/Home'); 
  // };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center"
                 >
    
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl w-full">
        <div className="bg-gray-100 p-8 w-1/2 flex items-center justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/425/366/original/architect-foreman-engineering-construction-worker-vector-illustration.jpg"
            alt="Vector image"
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        <div className="bg-blue-700 text-white w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6">Welcome!</h2>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                className="w-full p-2 rounded bg-white text-gray-800"
                placeholder="Your name"
              />
            </div>

            <div>
              <input
                type="email"
                className="w-full p-2 rounded bg-white text-gray-800"
                placeholder="Your e-mail"
              />
            </div>

            <div>
              <input
                type="password"
                label='Create password'
                className="w-full p-2 rounded bg-white text-gray-800"
                placeholder="Create password"
              />
              <div className='flex '>
              <div className="text-sm text-gray-200 mt-1 mr-5">Password strength</div>
              <div className="flex items-center mt-1 space-x-2">
                <span className="block w-10 h-2 bg-yellow-500"></span>
                <span className="block w-10 h-2 bg-yellow-500"></span>
                <span className="block w-10 h-2 bg-green-500"></span>
              </div></div>
            </div>

            <div className="flex justify-between mt-6">
              <button className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg ml-14">
                Create account
              </button>
              <button
              
                className="border-2 border-white px-4 py-2 rounded-lg mr-14"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
