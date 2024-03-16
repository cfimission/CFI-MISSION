'use client'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView();

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://cfi-mission-backend.vercel.app/gallery/${params.id}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, [params.id]);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  }

  const Modal = () => {
    const handlePrevious = (e) => {
      e.stopPropagation(); // stop event propagation
      const newIndex = selectedImageIndex === 0 ? data.ImageUrls.length - 1 : selectedImageIndex - 1;
      setSelectedImageIndex(newIndex);
    };
  
    const handleNext = (e) => {
      e.stopPropagation(); // stop event propagation
      const newIndex = selectedImageIndex === data.ImageUrls.length - 1 ? 0 : selectedImageIndex + 1;
      setSelectedImageIndex(newIndex);
    };
  
    const handleImageClick = (e) => {
      e.stopPropagation(); // stop event propagation
    };
  
    return (
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <div className="relative">
          <button
            className="absolute top-4 right-4 text-white focus:outline-none"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
  
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white focus:outline-none"
            onClick={handlePrevious}
          >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
  
          <motion.img
            src={data.ImageUrls[selectedImageIndex]}
            alt={`Image ${selectedImageIndex + 1}`}
            className="w-full md:h-screen"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={handleImageClick}
          />
  
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white focus:outline-none"
            onClick={handleNext}
          >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <Loading />
      ) : data ? (
        <div className="container mx-auto py-8">
          <motion.div whileInView={{ opacity: [0, 1], y: [10, 0], transition: { duration: 1, ease: 'easeInOut' } }}>
            <h1 className="text-3xl font-bold mb-4 px-5">{data.title}</h1>
            <p className="text-gray-700 mb-4 px-5">{data.description}</p>
          </motion.div>
          <div className="flex flex-wrap gap-10 justify-center">
            {data.ImageUrls.map((imageUrl, index) => (
              <motion.img
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="w-auto h-64 p-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>No data available.</p>
      )}
      {isModalOpen && <Modal />}
    </div>
  );
};

export default Page;
