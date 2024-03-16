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
    return (
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      >
        <motion.img
          src={data.ImageUrls[selectedImageIndex]}
          alt={`Image ${selectedImageIndex + 1}`}
          className="max-w-full max-h-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          onClick={(e) => e.stopPropagation()}
        />
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
<div className="flex flex-wrap gap-1  justify-center">
  {data.ImageUrls.map((imageUrl, index) => (
    <motion.img
      key={index}
      src={imageUrl}
      alt={`Image ${index + 1}`}
      className="w-auto h-auto max-h-64 p-2"
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