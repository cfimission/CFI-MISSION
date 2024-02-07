'use client'
import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import axios if not already imported
import { motion } from "framer-motion";

const RecentActivitiesSlider = ({ img }) => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4,5]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % img.length
      );
      return updatedIndexes;
    });
  };

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((_, i) => (i - index + img.length) % img.length)
    );
  };

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
      <h1 className="text-center text-3xl font-bold pb-5">Recent Activities</h1>

      <div className="flex items-center flex-col justify-center md:h-[50vh] h-[30vh] relative overflow-hidden mb-5">
        {img.map((image, index) => (
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
