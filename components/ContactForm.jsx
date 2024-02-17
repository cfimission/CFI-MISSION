'use  client'
import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from 'axios';
import { MdOutlineDoneOutline } from "react-icons/md";
import Link from 'next/link';
const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        {submitDone ? (
         <div className="flex flex-col items-center space-y-4 relative">
         <button type="button" onClick={onClose} className="absolute top-0 right-0 p-2"><IoMdCloseCircleOutline size={20} /></button>
         <MdOutlineDoneOutline color='green' size={40} />
         <p>Contact form submitted successfully!</p>
       </div>
        ) : (
          <form className="space-y-4">
            <div className='flex justify-between pb-5'>
              <h1 className='font-bold'>Contact us</h1>
              <button type="button" onClick={onClose}><IoMdCloseCircleOutline size={20} /></button>
            </div>
            <div>
              <label htmlFor="name-input" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
              <input
                type="text"
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className='pb-5'>
              <label htmlFor="phone-input" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
              <input
                type="tel"
                id="phone-input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <Link href='' onClick={handleContactSubmit} className="bg-black text-white px-4 py-2 rounded-md">Submit</Link>
          </form>
        )}
      </div>
    </div>
  );
};
export default ContactForm;
