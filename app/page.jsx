'use client'
import Navbar from "@/components/Navbar";
import RecentActivitiesSlider from "@/components/RecentActivitiesSlider";
import { FaPrayingHands } from "react-icons/fa";
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* herosection */}
      <div
        id="section"
        className="relative h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
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
          src="https://images.unsplash.com/photo-1574642631319-ee4e726c5888?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Image"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <motion.div whileInView={{ opacity: [0, 1], y: [100, 0], transition: { duration: 1, ease: 'easeInOut' } }}>
  {/* versesection */}
  <div id="section" className="flex justify-center p-5">
    <div className="rounded-lg bg-[#e6e9f3] p-4 my-10 flex flex-col items-center justify-center shadow-inner-smooth max-w-2xl">
        <motion.div whileInView={{ x: [40, 0], transition: { duration: 1, ease: 'easeIn' } }}>
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">

          Daily Verse
      </h5>

        </motion.div>
        <motion.div whileInView={{ x: [40, 0], transition: { duration: 1, ease: 'easeIn' } }}>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-md">

          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      </motion.div>

    </div>
  </div>
</motion.div>

      {/* recent activits */}

      <div id="section" className="p-10">
        <RecentActivitiesSlider />
      </div>

      {/* other pages navigation cards */}
      <div
        id="section"
        className="flex justify-around p-5 md:flex-row flex-col gap-10"
      >
      <motion.div whileInView={{ opacity: [0, 1], x: [0, 50], transition: { duration: 1, ease: 'easeInOut' } }}>
      <div class="max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

          <a href="/about/sureshkumar">
            
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              We Pray For You
            </h5>
          </a>

          <div className="flex gap-5">
            <img
              class="object-cover w-1/2  rounded-lg h-1/2 md:h-auto md:w-48"
              src="https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="flex flex-col justify-around">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-fit"
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

      <motion.div whileInView={{ opacity: [0, 1], x: [0, 50], transition: { duration: 1, ease: 'easeInOut' } }}>

        <div class=" md:max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
              God Bless You
            </h5>
          </a>

          <div className="flex gap-5">
            <img
              class="object-cover w-1/2 h-auto md:h-auto md:w-48 rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="flex flex-col justify-around">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-fit"
              >
                Testimonials{" "}
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
      </motion.div >

      </div>


      {/* services */}
      <motion.div whileInView={{ opacity: [0, 1], y: [100, 0], transition: { duration: 1, ease: 'easeInOut' } }}>

      <div
        className="flex justify-around p-28 md:flex-row flex-col items-center gap-4"
        id="section"
      >
        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-black flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#ffffff]">
          <FaPrayingHands className="text-white text-3xl group-hover:text-black" />

          <p className="font-bold text-2xl group-hover:text-black text-white/80">
            Telugu services
          </p>
          <p className="group-hover:text-black text-white/80 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            tempore
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

        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-black flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#ffffff]">
          <FaPrayingHands className="text-white text-3xl group-hover:text-black" />

          <p className="font-bold text-2xl group-hover:text-black text-white/80">
            Telugu services
          </p>
          <p className="group-hover:text-black text-white/80 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            tempore
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

        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-black flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#ffffff]">
          <FaPrayingHands className="text-white text-3xl group-hover:text-black" />

          <p className="font-bold text-2xl group-hover:text-black text-white/80">
            Telugu services
          </p>
          <p className="group-hover:text-black text-white/80 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            tempore
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

        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-black flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#ffffff] justify-center">
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
        </div>
      </div>

      </motion.div >


      {/* prayer request */}
      <div className="flex justify-center gap-5 items-center flex-col pb-10">
        <h1 className=" text-4xl font-bold">Pray Request</h1>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-20 py-2.5 text-center me-2 mb-2 animate-bounce"
        >
          Send
        </button>
      </div>
    </div>
  );
}
