"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Admin/Navbar";

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAbout, setSelectedAbout] = useState(null);

  const [newAbout, setNewAbout] = useState({
    sno:"",
    title: "",
    description: "",
    ImageUrls: [],
    dayabout: "",
    day: "",
    category: "", 
  });

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://cfi-mission-backend.vercel.app/about/admin");
      setAboutData(response.data);
      setLoading(false);
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching about data:", error);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAbout((prevAbout) => ({
      ...prevAbout,
      [name]: value,
    }));
  };

  const handleImageUrlsChange = (e) => {
    const { value } = e.target;
    setNewAbout((prevAbout) => ({
      ...prevAbout,
      ImageUrls: value.split("\n"),
    }));
  };

  const handleCreateAbout = async () => {
    try {
      setLoading(true);
      await axios.post( "https://cfi-mission-backend.vercel.app/about", newAbout);
      setNewAbout({
        sno:"",
        title: "",
        description: "",
        ImageUrls: [], // Fix the property name to ImageUrls
        dayabout: "",
        day: "",
        category: "", // Make sure to update if you have a category field
      });
      setSelectedAbout(null);
      setLoading(false);
      fetchAboutData();
    } catch (error) {
      setLoading(false);
      console.error(
        `Error ${selectedAbout ? "updating" : "creating"} about data:`,
        error
      );
    }
  };

  const handlesUpdatAbout = async () => {
    try {
      setLoading(true);
      await axios.put(`https://cfi-mission-backend.vercel.app/about/${selectedAbout._id}`, newAbout);
      setNewAbout({
        sno:"",
        title: "",
        description: "",
        ImageUrls: [], // Fix the property name to ImageUrls
        dayabout: "",
        day: "",
        category: "", // Make sure to update if you have a category field
      });
      setSelectedAbout(null);
      setLoading(false);
      fetchAboutData();

    } catch (error) {
      setLoading(false);

      console.error('Error updating testimonial:', error);
    }
  };


  // Handle delete about
  const handleDeleteAbout = async (id) => {
    try {
      await axios.delete(`https://cfi-mission-backend.vercel.app/about/${id}`);
      fetchAboutData();
    } catch (error) {
      console.error("Error deleting about data:", error);
    }
  };

  const handleUpdateAbout = (id) => {
    const selected = aboutData.find((about) => about._id === id);
    if (selected) {
    console.log(selected)

      setSelectedAbout(selected);
      setNewAbout({
        sno:selected.sno || '',
        title: selected.title || '',
        description: selected.description || '',
        ImageUrls: selected.ImageUrls || [],
        dayabout: selected.dayabout || '',
        day: selected.day || '',
        category: selected.category || '',
      });
    }
  };
  return (
    <div>
      <Navbar />
      <div className=" flex flex-wrap ">
        <div className="w-3/5 bg-red-500 h-full">
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                  <th scope="col" className="px-6 py-3">
                      Sno
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ImageUrl
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Day About
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Day
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Update
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {aboutData.map((data) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={data._id}
                    >
                      <td className="px-6 py-4">{data.sno}</td>

                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data.title.slice(0, 15) || "Title Not Available"}{" "}
                        {/* Ensure that data.title is not undefined */}
                      </th>
                      <td className="px-6 py-4">
                        {data.description?.slice(0, 15)}
                      </td>
                      <td className="px-6 py-4">
                        {data.ImageUrls[0].slice(0, 15)}
                      </td>
                      <td className="px-6 py-4">{data.dayabout}</td>
                      <td className="px-6 py-4">{data.day}</td>
                      <td className="px-6 py-4">{data.category}</td>
                      <td className="px-6 py-4">
                        <button onClick={() => handleUpdateAbout(data._id)}>
                          Update
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => handleDeleteAbout(data._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-2/5 fixed right-0 ">
          <div className="flex pt-10  ">
            <div className=" p-10 w-screen">
              <h1 className="text-2xl font-bold mb-4">New About Entry</h1>
              <form className="flex flex-col ">
              <label htmlFor="title">Sno:</label>
                <input
                  type="text"
                  id="sno"
                  name="sno"
                  value={newAbout.sno}
                  onChange={handleInputChange}
                  className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newAbout.title}
                  onChange={handleInputChange}
                  className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />

                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={newAbout.description}
                  onChange={handleInputChange}
                  className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                ></textarea>
   <label htmlFor='imageUrls'>Image URLs (separated by new line):</label>
                <textarea
                  id='imageUrls'
                  name='imageUrls'
                  value={newAbout.ImageUrls.join('\n')}
                  onChange={handleImageUrlsChange}
                  className='w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                ></textarea>

                <label htmlFor="dayabout">Day About:</label>
                <input
                  type="text"
                  id="dayabout"
                  name="dayabout"
                  value={newAbout.dayabout}
                  onChange={handleInputChange}
                  className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />

                <label htmlFor="day">Day:</label>
                <input
                  type="text"
                  id="day"
                  name="day"
                  value={newAbout.day}
                  onChange={handleInputChange}
                  className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />

                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  name="category"
                  value={newAbout.category}
                  onChange={handleInputChange}
                  className="w-full block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Suresh_Kumar">Suresh_Kumar</option>
                  <option value="Cfi_Mission">Cfi_Mission</option>
                </select>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={selectedAbout ? handlesUpdatAbout
                        : handleCreateAbout
                    }
                    className="w-32 mt-10  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    {loading ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <h1>{selectedAbout ? "Update" : "Create New"}</h1>
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

export default About;
