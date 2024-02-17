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

  const openContactForm = () => {
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };


  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://cfi-mission-backend.vercel.app/home"
      );
      setRecentImage(response.data.recentImages);
      setBannerImage(response.data.bannerImage);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <Navbar />
      {/* herosection */}
      <div
        id="section"
        className="relative md:h-screen  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            {/* <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Your Hero Title
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Your compelling hero message goes here.
            </p>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More
            </button> */}
          </div>
        </div>

        <img
          src={bannerImage}
          alt="Hero Image"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [100, 0],
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        {/* versesection */}
        <div id="section" className="flex justify-center p-5">
          <div className="rounded-lg bg-[#e6e9f3] p-4 my-10 flex flex-col items-center justify-center shadow-inner-smooth w-2xl">
            <motion.div
              whileInView={{
                x: [40, 0],
                transition: { duration: 1, ease: "easeIn" },
              }}
            >
              <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
                Daily Verse
              </h5>
            </motion.div>
            <motion.div
              whileInView={{
                x: [40, 0],
                transition: { duration: 1, ease: "easeIn" },
              }}
            >
              <p className="font-normal text-gray-900  text-md text-xl">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

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
          <div class="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
            <a href="/about/sureshkumar">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                We Pray For You
              </h5>
            </a>

            <div className="flex gap-5 flex-col md:flex-row justify-center items-center  h-full">
              <img
                class="object-cover md:w-96 w-full  rounded-lg   "
                src="https://res.cloudinary.com/dvmn1kn4y/image/upload/v1704534678/swykch8cwcfatoljsptf.jpg"
                alt=""
              />
              <div className="flex flex-col justify-around">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Welcome, Dear beloved. These are uncertain times filled with
                  anxiety and suffering, and you may be wrestling with difficult
                  situations, or perhaps need a message of encouragement or
                  hope. May we offer a prayer for you and your concerns?
                </p>
                <a
                  href="/about/sureshkumar"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-fit "
                >
                  About us
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2 rtl:animate-bounce"
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
          <div class="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full ">
            <a href="/testimonials">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                We Pray For You
              </h5>
            </a>

            
                <div className="flex gap-5 flex-col md:flex-row justify-center items-center">
              <img
                class="object-cover md:w-1/2 w-full  rounded-lg h-1/2 "
                src="https://res.cloudinary.com/dvmn1kn4y/image/upload/v1707910827/2_x2iri8.jpg"
                alt=""
              />
              <div className="flex flex-col justify-around">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  The true light that gives light to everyone was coming into
                  the world. - John 1:9 You are the light of the world. Matthew
                  5:14
                </p>
                <a
                  href="/testimonials"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-fit "
                >
                  Testimonials us
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2 rtl:animate-bounce"
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
        className="flex justify-around p-28 md:flex-row flex-col items-center gap-4"
        id="section"
      >
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [100, 0],
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-black flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#ffffff]">
            <FaPrayingHands className="text-white text-3xl group-hover:text-black" />

            <p className="font-bold text-2xl group-hover:text-black text-white/80">
              Sunday Service
            </p>
            <p className="group-hover:text-black text-white/80 text-md">
              * Marteru - 8:00AM
              <br />* Palakollu - 10:00AM
            </p>
            {/* <p
        style={{
          WebkitTextStroke: '1px gray',
          WebkitTextFillColor: 'transparent',
        }}
        className="text-5xl font-bold self-end"
      >
        09
      </p> */}
          </div>
        </motion.div>

        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [100, 0],
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-black flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#ffffff]">
            <FaPrayingHands className="text-white text-3xl group-hover:text-black" />

            <p className="font-bold text-2xl group-hover:text-black text-white/80">
              Communion Service
            </p>
            <p className="group-hover:text-black text-white/80 text-md">
              * Marteru - 1st Sunday 10:00AM
              <br />* Palakollu - 2nd Sunday 10:00AM
            </p>
            {/* <p
        style={{
          WebkitTextStroke: '1px gray',
          WebkitTextFillColor: 'transparent',
        }}
        className="text-5xl font-bold self-end"
      >
        09
      </p> */}
          </div>
        </motion.div>

        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [100, 0],
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-black flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#ffffff]">
            <FaPrayingHands className="text-white text-3xl group-hover:text-black" />

            <p className="font-bold text-2xl group-hover:text-black text-white/80">
              Mid-Week Service
            </p>
            <p className="group-hover:text-black text-white/80 text-md">
              * Marteru - Wednesday 7:00PM
              <br />* Palakollu - Tuesday 9:00AM
            </p>
            {/* <p
        style={{
          WebkitTextStroke: '1px gray',
          WebkitTextFillColor: 'transparent',
        }}
        className="text-5xl font-bold self-end"
      >
        09
      </p> */}
          </div>
        </motion.div>

        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [100, 0],
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-black flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#ffffff] justify-center">
            <Link href="/services">
              <p
                style={{
                  WebkitTextStroke: "1px gray",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-4xl font-bold "
              >
                View
                <br />
                More
                <br />
                services
              </p>

              <svg
                class="rtl:rotate-180 w-10 h-5 ms-2 group-hover:text-black text-white/80"
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
            </Link>
          </div>
        </motion.div>
      </div>

      {showContactForm && <ContactForm onClose={closeContactForm} />}
      <PrayerRequest onContactFormOpen={openContactForm} />    </div>
  );
}
