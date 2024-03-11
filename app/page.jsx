"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import RecentActivitiesSlider from "@/components/RecentActivitiesSlider";
import { FaPrayingHands } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import Loading from "@/components/Loading";
import Link from "next/link";
import PrayerRequest from "@/components/prayerrequest";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [recentImage, setRecentImage] = useState([]);
  const [bannerImage, setBannerImage] = useState();
  const [showContactForm, setShowContactForm] = useState(false);
  const [services, setServices] = useState([])
  const [verses, setVerses] = useState();
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const validCategories = ["Weekly", "Monthly", "Other"];
  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://cfi-mission-backend.vercel.app/services");
      
      const fetchedServices = [];
  
      for (const category of validCategories) {
        const service = response.data.find(service => service.category === category);
        if (service) {
          fetchedServices.push(service);
        }
      }
  
      setServices(fetchedServices);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);
    }
  };
useEffect(() => {
  fetchServices();
}, []);

  



  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://cfi-mission-backend.vercel.app/home");
      setRecentImage(response.data.recentImages);
      setBannerImage(response.data.bannerImage);
      setVerses(response.data.verces); // Set the verces data
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

useEffect(()=>{
  fetchData()
},[])
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <Navbar />
      {/* herosection */}
      <div
        id="section"
        className="relative md:h-screen"
      >
        <img
          src={bannerImage}
          alt="Hero Image"
          className="object-cover object-center  md:h-3/4 w-full h-auto "
        />
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [100, 0],
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        {/* versesection */}
        <div id="section" className="flex justify-center p-5">
  <div className="rounded-lg bg-[#1D24CA] p-4 my-10 flex flex-col items-center justify-center shadow-inner-smooth w-2xl">
    {verses && ( // Conditionally render only when verses is defined
      <>
        <motion.div
          whileInView={{
            x: [40, 0],
            transition: { duration: 1, ease: "easeIn" },
          }}
        >
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-white">
            {verses.split(':')[0]}
          </h5>
        </motion.div>
        <motion.div
          whileInView={{
            x: [40, 0],
            transition: { duration: 1, ease: "easeIn" },
          }}
        >
          <p className="font-normal text-white text-md text-xl">
            {verses.split(':')[1]}
          </p>
        </motion.div>
      </>
    )}
  </div>
</div>
        </motion.div>
      </div>



      {/* recent activits */}

      <div id="section" className="p-10">
        {loading ? <Loading /> : <RecentActivitiesSlider img={recentImage} />}
      </div>
      {/* other pages navigation cards */}
      <div
        id="section"
        className="flex justify-around p-5 md:flex-row  flex-col gap-10 "
      >
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [100, 0],
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <div className="max-w-2xl p-6 bg-[#1D24CA]   rounded-lg shadow  h-full">
            <a href="/about/sureshkumar">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-white ">
                We Pray For You
              </h5>
            </a>

            <div className="flex gap-5 flex-col md:flex-row justify-center items-center  h-full">
              <img
                className="object-cover md:w-96 w-full  rounded-lg   "
                src="https://res.cloudinary.com/dvmn1kn4y/image/upload/v1704534678/swykch8cwcfatoljsptf.jpg"
                alt=""
              />
              <div className="flex flex-col justify-around">
                <p className="mb-3 font-normal text-white ">
                  Welcome, Dear beloved. These are uncertain times filled with
                  anxiety and suffering, and you may be wrestling with difficult
                  situations, or perhaps need a message of encouragement or
                  hope. May we offer a prayer for you and your concerns?
                </p>
                <a
                  href="/about/sureshkumar"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#000000] bg-white rounded-lg   w-fit "
                >
                  About us
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 rtl:animate-bounce"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [100, 0],
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <div className="max-w-2xl p-6 bg-[#1D24CA]  rounded-lg shadow  h-full ">
            <a href="/testimonials">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-white ">
God Bless You
              </h5>
            </a>

            
                <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
              <img
                className="object-cover md:w-1/2 w-full  rounded-lg h-1/2 "
                src="https://res.cloudinary.com/dvmn1kn4y/image/upload/v1707910827/2_x2iri8.jpg"
                alt=""
              />
              <div className="flex flex-col justify-around">
                <p className="mb-3 font-normal text-white ">
                  The true light that gives light to everyone was coming into
                  the world. - John 1:9 You are the light of the world. Matthew
                  5:14
                </p>
                <a
                  href="/testimonials"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#000000] bg-white hover:text-white rounded-lg hover:bg-[#1D24CA]-900 focus:ring-4 focus:outline-none focus:ring-blue-300  w-fit "
                >
                  Testimonials us
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 rtl:animate-bounce"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* services */}

      <div
        className="flex justify-around p-28 md:flex-row flex-col items-center gap-"
        id="section"
      >
      <div className="flex justify-center flex-wrap gap-x-16 gap-y-5">
            {services
              .sort((a, b) => a.sno - b.sno) 
              .map((service, index) => (
                <div
                  key={index}
                  className="max-w-sm p-6 bg-[#1D24CA] text-white rounded-lg shadow  flex flex-col justify-center items-center"
                >
                  <img src={service.logo} alt="" className="h-20 w-20" />
                  <h1 className="md:text-xl text-md  font-bold mt-4">{service.title}</h1> 
                  <div className="table-container max-h-52 overflow-y-auto">
                    <table className="table-auto mt-4 ">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">Place</th>
                          <th className="px-4 py-2">Day</th>
                          <th className="px-4 py-2">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.description.split(";").map((detail, idx) => {
                          const [place, day, time] = detail.split(" - ");
                          return (
                            <tr key={idx}>
                              <td className="border px-4 py-2">{place}</td>
                              <td className="border px-4 py-2">{day}</td>
                              <td className="border px-4 py-2">{time}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
          </div>
          <a
    key="view-more"
    href="/services"
    className=" h-96 md:w-1/5 w-max p-6 mt-5  bg-[#1D24CA] text-white  rounded-lg shadow  flex flex-col justify-center items-center cursor-pointer" // Add cursor-pointer to indicate clickable
  >
    <h1 className="text-6xl text-md  font-bold mt-4 text-center">View More</h1>
  </a>      </div>

      <PrayerRequest />    
      </div>
  );
}
