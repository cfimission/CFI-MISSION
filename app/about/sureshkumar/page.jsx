"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import Loading from "@/components/Loading";

const SureshKumar = () => {
  const [aboutdata, setAboutData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchabout = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://cfi-mission-backend.vercel.app/about?category=Suresh_Kumar"
      );
      setAboutData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchabout();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <Navbar />

      <div className="flex justify-center m-5  ">
        <Link href="/about/sureshkumar" className="bg-[#98ABEE] rounded-l-lg">
          <h1 className="  text-lg md:text-xl p-2 font-bold bg-[#1D24CA] rounded-lg m-1 text-white text-center">About Pastor</h1>
        </Link>

        <Link href="/about/cfimission" className="bg-[#98ABEE] rounded-r-lg">
          <h1 className=" text-lg md:text-xl p-2 font-bold flex justify-center items-center text-white h-full  ">About Church</h1>
        </Link>
      </div>

      <div className="flex justify-center items-center m-5 ">
        <div className="md:w-1/3 ">
          {aboutdata.map((item) => (
            <motion.div
              key={item._id || index}
              whileInView={{
                opacity: [0, 1],
                y: [100, 0],
                transition: { duration: 1, ease: "easeInOut" },
              }}
            >
              <div className="flex gap-x-3 ">
                <div className="w-16 text-end">
                  <div className="w-20  text-center">
                    <span className="text-lg font-bold text-[#1D24CA] break-words">
                      {item.dayabout}
                    </span>
                  </div>
                  <span className="text-sm text-[#1D24CA]">
                    {item.day}
                  </span>
                </div>

                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-[#98ABEE] ">
                  <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-[#1D24CA] "></div>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8">
                  <h3 className="flex gap-x-1.5 font-semibold text-[#1D24CA] text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#1D24CA]">
                    {item.description}
                  </p>

                  <div className="flex gap-2 mt-2 flex-wrap">
                    {item.ImageUrls.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        className=" w-16 md:w-36 h-auto "
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SureshKumar;
