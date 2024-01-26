'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RecentActivitiesSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % images.length
      );
      return updatedIndexes;
    });
  };

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((_, i) => (i - index + images.length) % images.length)
    );
  };


  const images = ["https://plus.unsplash.com/premium_photo-1678233300991-77c08cbe4a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1528724566146-ccc7905835c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1678197482532-2a58a5ff084d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1607098263775-e2cc11657839?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1678388570933-f4254cbb741b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];



  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
  <h1 className=" text-center  text-3xl font-bold pb-5">Recent Activits</h1>

      <div className="flex items-center flex-col justify-center md:h-[50vh] h-[30vh] relative overflow-hidden mb-5">

        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={image}
            className="rounded-[12px] absolute"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{
              width: "80%", // Adjust as needed for responsiveness
              maxWidth: "700px", // Set a maximum width if needed
              height: "auto", // Maintain aspect ratio
              cursor: "pointer",
              opacity:
              positions[positionIndexes[index]] === "center"
                ? 1
                : positions[positionIndexes[index]] === "left1" ||
                  positions[positionIndexes[index]] === "right1"
                ? 0.7
                : 0.4,
          
            }}
            onClick={() => handleImageSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivitiesSlider;
