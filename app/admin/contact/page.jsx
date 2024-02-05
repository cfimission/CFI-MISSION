'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/Admin/Navbar';

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts data when the component mounts
    const fetchContacts = async () => {
      try {
        const response = await axios.get('https://cfi-mission-backend.vercel.app/contact');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []); 

  return (
    <>
      <Navbar />

      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Contact List</h1>

        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Phone Number</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td className="py-2 px-4 border-b text-center">{contact.name}</td>
                <td className="py-2 px-4 border-b text-center">{contact.phoneNumber}</td>
                <td className="py-2 px-4 border-b text-center">{new Date(contact.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
