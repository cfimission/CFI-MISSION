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
              <h5 className=" text-4xl font-bold tracking-wide text-purple-700  uppercase text-center my-10 ">
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
             <div className="flex flex-wrap justify-center gap-5">
  {items.videoUrls.map((videoId, index) => (
    <div key={index} class="aspect-w-16 aspect-h-9">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={`YouTube Video ${index + 1}`}
        frameBorder="0"
        allowFullScreen
        class="w-full h-full lg:w-[460px] lg:h-[215px]"
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
