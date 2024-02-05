'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/Admin/Navbar';

const GalleryPage = () => {
  const [galleryEntries, setGalleryEntries] = useState([]);
  const [loading,setLoading] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState(null);

  const [newEntry, setNewEntry] = useState({
    title: '',
    description: '',
    ImageUrls: [],
  });

  const fetchGalleryEntries = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/gallery'); 
      setGalleryEntries(response.data);
      setLoading(false)

      console.log(response)
    } catch (error) {
      setLoading(false)

      console.error('Error fetching gallery entries:', error);
    }
  };

  useEffect(() => {
    fetchGalleryEntries();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleImageUrlsChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      ImageUrls: value.split('\n'),
    }));
  };

  const handleCreateEntry = async () => {
    try {
      setLoading(true)
      await axios.post('http://localhost:3000/gallery', newEntry);
      setNewEntry({
        title: '',
        description: '',
        ImageUrls: [],
      });
      setLoading(false)

      fetchGalleryEntries();
    } catch (error) {
      setLoading(false)

      console.error('Error creating gallery entry:', error);
    }
  };

  const handelDelete = async ( id )=>{
    try {
      await axios.delete(`http://localhost:3000/gallery/${id}`)
      fetchGalleryEntries();
    } catch (error) {
      console.error('Error creating gallery entry:', error);
    }
  }
  const handleUpdate = (id) => {
    const selected = galleryEntries.find((entry) => entry._id === id);
    setSelectedEntry(selected);
    setNewEntry({
      title: selected.title,
      description: selected.description,
      ImageUrls: selected.ImageUrls,
    });
  };
  const handleUpdateEntry = async () => {
    try {
      setLoading(true);
      await axios.put(`http://localhost:3000/gallery/${selectedEntry._id}`, newEntry);
      setSelectedEntry(null);
      setNewEntry({
        title: "",
        description: "",
        ImageUrls: [],
      });
      setLoading(false);
  
      fetchGalleryEntries();
    } catch (error) {
      setLoading(false);
  
      console.error("Error updating gallery entry:", error);
    }
  };
  
  return (
<div>
  <Navbar/>
  <div className=' flex flex-wrap '>
  <div className='w-3/5 bg-red-500 h-full'>
    <div>
      

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                title
                                </th>
                <th scope="col" class="px-6 py-3">
                description
                </th>
                <th scope="col" class="px-6 py-3">
                ImageUrls
                </th>
                <th scope="col" class="px-6 py-3">
               update
                </th>
                <th scope="col" class="px-6 py-3">
               delete
                </th>
                

            </tr>
        </thead>
        <tbody>
          { galleryEntries.map((data)=>(
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {data.title}
    </th>
    <td class="px-6 py-4">
        {data.description.slice(0, 15)}
    </td>
    <td class="px-6 py-4">
        {data.ImageUrls[0].slice(0,20)}
    </td>
    <td class="px-6 py-4">
        <button onClick={() => handleUpdate(data._id)}>update</button>
    </td>
    <td class="px-6 py-4">
    <button onClick={() => handelDelete(data._id)}>delete</button>

    </td>
 
</tr>
            ) )         
          }


        </tbody>
    </table>
</div>

    </div>
  </div>
  <div className='w-2/5 fixed right-0 '>
  <div className='flex pt-10  '>
    <div className=' p-10 w-screen'>
      <h1 className='text-2xl font-bold mb-4'>New Post</h1>
      <form className='flex flex-col '>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          name='title'
          value={newEntry.title}
          onChange={handleInputChange}
          className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        />

        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          name='description'
          value={newEntry.description}
          onChange={handleInputChange}
          className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        ></textarea>

        <label htmlFor='imageUrls'>Image URLs (separated by new line):</label>
        <textarea
          id='imageUrls'
          name='imageUrls'
          value={newEntry.ImageUrls.join('\n')}
          onChange={handleImageUrlsChange}
          className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        ></textarea>
<div className='flex justify-center'>
<button
  type="button"
  onClick={selectedEntry ? handleUpdateEntry : handleCreateEntry}
  className="w-32 mt-10  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
>
  {loading ? (
    <div role="status">
      <svg
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  ) : (
    <h1>{selectedEntry ? "Update" : "Create New"}</h1>
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

export default GalleryPage;
