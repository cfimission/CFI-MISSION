import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from 'axios';
import { MdOutlineDoneOutline } from "react-icons/md";

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [submitDone, setSubmitDone] = useState(false);

  const handleContactSubmit = async () => {
    try {
      const response = await axios.post('https://cfi-mission-backend.vercel.app/contact', {
        name: name,
        phoneNumber: phoneNumber,
      });
      setSubmitDone(true);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting contact:', error);
    }
  };

  return (
    <>
      {submitDone ? (
        <div className="fixed inset-10 z-10 flex items-center justify-center bg-black-800 bg-opacity-75">
          <div className="bg-gradient-to-br from-purple-700 via-blue-500 to-green-400 p-8 rounded-lg">
            <MdOutlineDoneOutline color='white' size={40} />
          </div>
        </div>
      ) : (
        <div className="fixed inset-10 z-10 flex items-center justify-center bg-black-800 bg-opacity-75">
          <div className="bg-gradient-to-br from-purple-700 via-blue-500 to-green-400 p-8 rounded-lg">
            <div className='flex justify-between pb-5'>
              <h1 className='font-bold'>Contact us</h1>
              <button onClick={onClose}><IoMdCloseCircleOutline size={20} /></button>
            </div>

            <div className="mb-5">
              <label htmlFor="name-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input
                type="text"
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
              />

              <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
              <input
                type="number"
                id="phone-input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
              />
            </div>

            <button onClick={handleContactSubmit} className="bg-black text-white px-4 py-2 rounded-md ">
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
