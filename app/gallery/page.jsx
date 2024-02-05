'use client'
import ImageModal from "@/components/ImageModel";
import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
// ... (existing imports)

const Gallery = () => {
  const [data, setData] = useState([]);
  const [activeImages, setActiveImages] = useState([]); // Use an array to store active images for each set

  const [loading, setLoading] = useState(false);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://cfi-mission-backend.vercel.app//gallery');
      setData(response.data);
      // Initialize activeImages array with null for each set
      setActiveImages(response.data.map(() => null));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const openModal = (img, setIndex) => {
    const updatedActiveImages = [...activeImages];
    updatedActiveImages[setIndex] = img;
    setActiveImages(updatedActiveImages);
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center py-10 px-2">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
          {data.map((info, setIndex) => (
            <div key={setIndex} className="grid gap-4 w-96 h-auto p-5 rounded-md bg-slate-100">
              <div>
                <img
                  className="h-auto w-full max-w-full rounded-lg object-cover object-center"
                  src={activeImages[setIndex] || info.ImageUrls[0]}
                  alt=""
                />
              </div>
              <div className="grid grid-cols-5 gap-4">
                {info.ImageUrls.slice(0, 5).map((imagelink, index) => (
                  <div key={index}>
                    <img
                      onClick={() => openModal(imagelink, setIndex)}
                      src={imagelink}
                      className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                      alt="gallery-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

