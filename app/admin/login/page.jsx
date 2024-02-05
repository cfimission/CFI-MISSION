'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

// Import statements remain unchanged

const Login = () => {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent default form submission behavior
  
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username,  // Use the correct variable name
          password,  // Use the correct variable name
        });
  
        localStorage.setItem('token', response.data.token);
        router.push('/admin/gallery')

      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className='flex justify-center items-center h-screen'>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
  
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    );
  };
  
  export default Login;
  