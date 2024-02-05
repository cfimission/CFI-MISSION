'use client'
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion'
import axios from "axios";

const SureshKumar = () => {
  const [aboutdata ,setAboutData] = useState()
  const [loading,setLoading] = useState(false)
  const fetchabout = async()=>{
    try {
      setLoading(true)
      const response = await axios.get('https://cfi-mission-backend.vercel.app//about'); 
      setAboutData(response.data)
      setLoading(false)
      console.log(aboutdata)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchabout()
  },[])

if(loading){
  return <h1>loading</h1>
}
  return (
    <div className="">
      <Navbar />

      <div className="flex justify-center m-5  ">
   
        <Link
          href="/about/sureshkumar"
          className=" border-b-2 border-cyan-600"
        >
          <h1 className=" text-lg p-2 md:text-xl font-bold">
            About Suresh Kumar
          </h1>
        </Link>

        <Link
          href="/about/cfimission"
          className=" border-b-2"
        
        >
          <h1 className=" text-lg md:text-xl p-2 font-bold  ">
            About Cfi Mission
          </h1>
        </Link>


      </div>

      <div className="flex justify-center items-center m-5 ">
        <div className="md:w-1/3 ">
          {aboutdata.map((item) => (
      <motion.div whileInView={{ opacity: [0, 1], y: [100, 0], transition: { duration: 1, ease: 'easeInOut' } }} key={item._id}>

<div  className="flex gap-x-3 ">
              <div className="w-16 text-end">
              <span className="text-lg font-bold text-black dark:text-gray-400">Birth</span>
<br />
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
              </div>

              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                <div className="flex gap-2 mt-2">
                  {item.images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} className=" w-28 md:w-64 h-auto " />
                  ))}
                </div>
              </div>
            </div>
      </motion.div >

          ))}
        </div>
      </div>
    </div>
  );
};

export default SureshKumar;
