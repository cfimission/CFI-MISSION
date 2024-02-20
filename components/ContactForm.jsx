'use client'
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const Number=8520800787
      const whatsappURL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(Number)}&text=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(contact)}%0AMessage:%20${encodeURIComponent(message)}`;

      window.location.href = whatsappURL;
      setSubmitDone(true);
    } catch (error) {
      console.error('Error sending message to WhatsApp:', error);
    }
  };
  return (
    <div className=" mx-auto md:w-1/2 mt-10 p-6 bg-purple-700 text-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-semibold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-white font-semibold mb-2">Contact</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-white font-semibold mb-2">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-300">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
