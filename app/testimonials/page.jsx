"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Loading from "@/components/Loading";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://cfi-mission-backend.vercel.app/testimonials"
      );
      setTestimonials(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (loading){
    return <Loading/>
  }
  return (
    <div>
      <Navbar />
      <div>
        {testimonials.map((items) => (
          <div className=" p-5" key={items._id}>
            <motion.div
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 1, ease: "easeInOut" },
              }}
            >
              <h5 className=" text-4xl font-bold tracking-wide text-gray-900 dark:text-white  uppercase text-center my-10 ">
                {items.title}
              </h5>
            </motion.div>

            <motion.div
              whileInView={{
                opacity: [0, 1],
                y: [100, 0],
                transition: { duration: 1, ease: "easeInOut" },
              }}
            >
              <div class="flex gap-5 justify-center flex-wrap">
                {items.videoUrls.map((videoId, index) => (
                  <div key={index}>
                    <iframe
                      width="460"
                      height="215"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`YouTube Video ${index + 1}`}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
