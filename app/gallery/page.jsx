'use client'
import ImageModal from "@/components/ImageModel";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Gallery = () => {

  const [data, setData] = useState([]);
  const [activeImages, setActiveImages] = useState([]); // Use an array to store active images for each set
  const [loading, setLoading] = useState(false);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://cfi-mission-backend.vercel.app/gallery');
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
    return <Loading/>
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center py-10  px-2">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-16 w-full">
          {data.map((info, setIndex) => (
            <div key={setIndex} className="grid gap-4 justify-between  h-max w-96  p-5 md:mx-5 rounded-md bg-[#1D24CA]">
              <div>
                <h1 className="text-center font-bold text-white text-3xl  pb-2">{info.title }</h1>
                <img
                  className=" h-96 w-full rounded-lg object-cover object-center"
                  src={activeImages[setIndex] || info.ImageUrls[0]}
                  alt=""
                />
              </div>
              <div className="grid grid-cols-3 gap-x-4 ">
                {info.ImageUrls.slice(0, 3).map((imagelink, index) => (
                  <div key={index}>
                    <img
                      onClick={() => openModal(imagelink, setIndex)}
                      src={imagelink}
                      className="h-20 w-full  cursor-pointer rounded-lg object-cover object-center"
                      alt="gallery-image"
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end items-end">

              <Link  href={`/gallery/${info._id}`}
  className="w-full h-10 bg-[#F9E8C9] text-[#201658] rounded-md  font-bold uppercase py-2  transition duration-300 text-center " onPaste={()=>router.push('/gallery/viewmore')}
>
See All
</Link>   
</div>

</div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;

