'use client'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const controls = useAnimation();
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


  return (
    <div>
      <Navbar />
      {loading ? (
        <Loading />
      ) : data ? (
        <div className="container mx-auto py-8">
            <motion.div whileInView={{ opacity: [0, 1], x: [0, 100], transition: { duration: 1, ease: 'easeInOut' } }}>

            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-gray-700 mb-4">{data.description}</p>

          </motion.div>

            <div className="flex flex-wrap gap-10 justify-center">
              {data.ImageUrls.map((imageUrl, index) => (
                <motion.img
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg w-auto h-64"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Page;
