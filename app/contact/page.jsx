"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaYoutube, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center items-center gap-5  md:justify-around flex-wrap flex-col md:flex-row p-5">
          <div class=" max-w-md md:w-1/5 md:h-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 d items-center flex flex-col gap-5 justify-center">
            <div className="flex  justify-around w-full">
              <div style={{ transform: "scaleX(-1)" }}>
                <FaPhone size={40} color="blue" />
              </div>
              <IoLogoWhatsapp size={50} color="green" />
            </div>

            <h5 className="font-bold text-xl md:text-3xl text-[#1D24CA]  ">
              99494 77535
            </h5>

            <div className="flex gap-10">
              <Link href="https://www.youtube.com/channel/UCqL8AioSE_S4AAPgUVe1SJw">
                <FaYoutube size={50} color="red" />
              </Link>
              <Link href="https://www.instagram.com/cfi_mission?igsh=ZW5jeG94ajdxM3Y=">
                <Icon icon="skill-icons:instagram" width={50} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100079778833071">
                <FaFacebook size={50} color="blue" />
              </Link>
            </div>

            <h5 class="mb-2 text-2xl font-normal tracking-tight text-[#1D24CA] ">
              email
            </h5>
            <p class="font-bold text-[#1D24CA] md:text-2xl">
              cfimission@gmail.com
            </p>
          </div>

          <div class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 d flex flex-col gap-5">
            <div className="text-center">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Address
              </h5>
            </div>
            <div className=" flex gap-x-2">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#1D24CA] ">
                MARTERU
              </h5>
              <FaLocationDot size={25} color="red" className="animate-bounce" />
            </div>

            <h5 className="font-bold text-md text-black  ">
              CFI MISSION CHURCH 5-2 VANAMPALLI, NEGGIPUDI - MARTERU, WEST
              GODAVARI DIST - ANDHRA PRADESH PINCODE - 534122
            </h5>
            <div className=" flex gap-x-2">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#1D24CA] ">
                PALAKOLLU
              </h5>
              <FaLocationDot size={25} color="red" className="animate-bounce" />
            </div>

            <h5 className="font-bold text-md text-black  ">
              CFI MISSION CHURCH PARVATHI NAGAR - CHERUVUPETA PALAKOLLU - ANDHRA
              PRADESH PINCODE - 534260
            </h5>
          </div>
        </div>

        {/* contact form */}

        <div id="from">
          <ContactForm />
        </div>

        <div className="flex flex-col justify-cente md:items-center m-5 gap-5">
          <div className="md:w-1/2">
            <h1 className=" font-bold text-2xl text-[#1D24CA] uppercase pb-5">
              GOOGLE MAPS LINKS
            </h1>
            <h5 className="font-bold text-lg text-black   ">MARTERU</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.0076048716014!2d81.7365567!3d16.626387500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37c528895a06db%3A0xacc7fcb2f3539233!2zQ0ZJIE1JU1NJT04gQ0hVUkNIIOCwuOCwvy7gsI7gsKvgsY0u4LCQIOCwruCwv-Cwt-CwqOCxjSDgsJrgsLDgsY3gsJrgsL8!5e0!3m2!1sen!2sin!4v1707819177048!5m2!1sen!2sin"
              className="w-full h-64"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <h5 className="font-bold text-lg text-black pt-5 ">PALAKOLLU</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.9604084295656!2d81.7293949!3d16.528096299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37db953f1abfeb%3A0x5f9e5e0165371d2e!2sCFI%20MISSION%20PALAKOLLU!5e0!3m2!1sen!2sin!4v1707819338759!5m2!1sen!2sin"
              className="w-full h-64 pb-5"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
