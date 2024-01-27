'use client'
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <div>
      <Navbar />


<div>
<div className=" p-5">
<motion.div whileInView={{ opacity: [0, 1], y: [50, 0], transition: { duration: 1, ease: 'easeInOut' } }}>

        <h5 className=" text-xl font-bold tracking-wide text-gray-900 dark:text-white  uppercase text-center my-10 ">
          Pastor Family Testimonials
        </h5>
      </motion.div >

      <motion.div whileInView={{ opacity: [0, 1], y: [100, 0], transition: { duration: 1, ease: 'easeInOut' } }}>


        <div class="flex gap-5 justify-center flex-wrap">

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2mgUPt2KI08?si=VpQr6yEGMfmZpfsf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
              <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2mgUPt2KI08?si=VpQr6yEGMfmZpfsf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
              <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2mgUPt2KI08?si=VpQr6yEGMfmZpfsf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        </motion.div>

      </div>

      <div className=" p-5">
<motion.div whileInView={{ opacity: [0, 1], y: [50, 0], transition: { duration: 1, ease: 'easeInOut' } }}>

        <h5 className=" text-xl font-bold tracking-wide text-gray-900 dark:text-white  uppercase text-center my-10 ">
          Pastor Family Testimonials
        </h5>
      </motion.div >

      <motion.div whileInView={{ opacity: [0, 1], y: [100, 0], transition: { duration: 1, ease: 'easeInOut' } }}>


        <div class="flex gap-5 justify-center flex-wrap">

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2mgUPt2KI08?si=VpQr6yEGMfmZpfsf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
              <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2mgUPt2KI08?si=VpQr6yEGMfmZpfsf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
              <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2mgUPt2KI08?si=VpQr6yEGMfmZpfsf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        </motion.div>

      </div>
</div>

    </div>
  );
};

export default Testimonials;
