'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/Admin/Navbar';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const [newTestimonial, setNewTestimonial] = useState({
    title: '',
    description: '',
    videoUrls: [],
  });

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://cfi-mission-backend.vercel.app/testimonials');
      setTestimonials(response.data);
      setLoading(false);

      console.log(response);
    } catch (error) {
      setLoading(false);

      console.error('Error fetching testimonials:', error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial((prevTestimonial) => ({
      ...prevTestimonial,
      [name]: value,
    }));
  };

  const handleImageUrlsChange = (e) => {
    const {  value } = e.target;
    setNewTestimonial((prevTestimonial) => ({
      ...prevTestimonial,
      videoUrls: value.split('\n'),
    }));
  };

  const handleCreateTestimonial = async () => {
    try {
      setLoading(true);
      await axios.post('https://cfi-mission-backend.vercel.app/testimonials', newTestimonial);
      setNewTestimonial({
        title: '',
        description: '',
        videoUrls: [],
      });
      setLoading(false);

      fetchTestimonials();
    } catch (error) {
      setLoading(false);

      console.error('Error creating testimonial:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://cfi-mission-backend.vercel.app/testimonials/${id}`);
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  const handleUpdate = (id) => {
    const selected = testimonials.find((testimonial) => testimonial._id === id);
    setSelectedTestimonial(selected);
    setNewTestimonial({
      title: selected.title,
      description: selected.description,
      videoUrls: selected.videoUrls,
    });
  };

  const handleUpdateTestimonial = async () => {
    try {
      setLoading(true);
      
      await axios.put(`https://cfi-mission-backend.vercel.app/testimonials/${selectedTestimonial._id}`, newTestimonial);
      setSelectedTestimonial(null);
      setNewTestimonial({
        title: '',
        description: '',
        videoUrls: [],
      });
      setLoading(false);

      fetchTestimonials();
    } catch (error) {
      setLoading(false);

      console.error('Error updating testimonial:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className=' flex flex-wrap '>
        <div className='w-3/5 bg-red-500 h-full'>
          <div>
            <div className='relative overflow-x-auto'>
              <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      title
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      description
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      videoUrls
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      update
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((data) => (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={data._id}>
                      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        {data.title}
                      </th>
                      <td className='px-6 py-4'>{data.description.slice(0, 15)}</td>
                      <td className='px-6 py-4'>{data.videoUrls[0]}</td>
                      <td className='px-6 py-4'>
                        <button onClick={() => handleUpdate(data._id)}>update</button>
                      </td>
                      <td className='px-6 py-4'>
                        <button onClick={() => handleDelete(data._id)}>delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='w-2/5 fixed right-0 '>
          <div className='flex pt-10  '>
            <div className=' p-10 w-screen'>
              <h1 className='text-2xl font-bold mb-4'>New Testimonial</h1>
              <form className='flex flex-col '>
                <label htmlFor='title'>Title:</label>
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={newTestimonial.title}
                  onChange={handleInputChange}
                  className='w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                />

                <label htmlFor='description'>Description:</label>
                <textarea
                  id='description'
                  name='description'
                  value={newTestimonial.description}
                  onChange={handleInputChange}
                  className='w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                ></textarea>

                <label htmlFor='imageUrls'>Youtube video id (separated by new line):</label>
                <textarea
                  id='imageUrls'
                  name='imageUrls'
                  value={newTestimonial.videoUrls.join('\n')}
                  onChange={handleImageUrlsChange}
                  className='w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                ></textarea>
                <div className='flex justify-center'>
                  <button
                    type='button'
                    onClick={selectedTestimonial ? handleUpdateTestimonial : handleCreateTestimonial}
                    className='w-32 mt-10  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                  >
                    {loading ? (
                      <div role='status'>
                        <svg
                          aria-hidden='true'
                          className='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                          viewBox='0 0 100 101'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                            fill='currentColor'
                          />
                          <path
                            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            fill='currentFill'
                          />
                        </svg>
                        <span className='sr-only'>Loading...</span>
                      </div>
                    ) : (
                      <h1>{selectedTestimonial ? 'Update' : 'Create New'}</h1>
                    )}
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

export default Testimonials;
