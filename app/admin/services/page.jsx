'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Admin/Navbar';
import axios from 'axios'; // Import axios for making HTTP requests

const Page = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const validCategories = ["Weekly","Monthly","Other"]; 

  const [formData, setFormData] = useState({
    sno: '',
    title: '',
    description: '',
    logo: '', // Add logo field to formData
    category: '' // Add category field to formData
  });

  const fetchServices = async () => {
    try {
      const response = await axios.get('https://cfi-mission-backend.vercel.app/services'); 

      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (formData._id) {
        await axios.put(`https://cfi-mission-backend.vercel.app/services/${formData._id}`, formData);
      } else {
        await axios.post('https://cfi-mission-backend.vercel.app/services', formData);
      }
      fetchServices();
      setFormData({ sno: '', title: '', description: '', logo: '', category: '' }); // Reset fields after submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://cfi-mission-backend.vercel.app/services/${id}`);
      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleEdit = (service) => {
    setFormData(service);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex flex-wrap '>
        <div className='w-3/5 bg-red-500 h-full overflow-scroll'>
          <div>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              {/* Table Header */}
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    sno
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    title
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    description
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    logo
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    update
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    delete
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {services .sort((a, b) => {
    // First, compare by category
    const categoryComparison = a.category.localeCompare(b.category);
    // If categories are equal, compare by sno
    return categoryComparison === 0 ? a.sno - b.sno : categoryComparison;
  }).map(service => (
                  <tr key={service._id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                    <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{service.sno}</td>
                    <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{service.title.split(';')[0]}</td>
                    <td className='px-6 py-4'>{service.description}</td>
                    <td className='px-6 py-4'>{service.logo?.slice(0, 15)}</td>
                    <td className='px-6 py-4'>{service.category}</td>
                    <td className='px-6 py-4'>
                      <button onClick={() => handleEdit(service)}>update</button>
                    </td>
                    <td className='px-6 py-4'>
                      <button onClick={() => handleDelete(service._id)}>delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Form for adding/editing services */}
        <div className='w-2/5 fixed right-0'>
          <div className='flex pt-10'>
            <div className='p-10 w-screen'>
              <h1 className='text-2xl font-bold mb-4'>New services</h1>
              <form className='flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor='sno'>Sno:</label>
                <input
                  type='text'
                  id='sno'
                  name='sno'
                  value={formData.sno}
                  onChange={(e) => setFormData({ ...formData, sno: e.target.value })}
                  className='w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                />
                <label htmlFor='title'>Title:</label>
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className='w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                />

                <label htmlFor='description'>Description:</label>
                <textarea
                  id='description'
                  name='description'
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className='w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                ></textarea>

                <label htmlFor='logo'>Logo URL:</label>
                <input
                  type='text'
                  id='logo'
                  name='logo'
                  value={formData.logo}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  className='w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                />

                <label htmlFor='category'>Category:</label>
                <select
                  id='category'
                  name='category'
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className='w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                >
                  <option value=''>Select a category</option>
                  {validCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <div className='flex justify-center'>
                  <button
                    type='submit'
                    className='w-32 mt-10 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
