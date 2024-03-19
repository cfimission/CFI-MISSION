"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaYoutube, FaPhone,FaEnvelope,FaVideo } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
const Contact = () => {
  return (
    <div>
      <Navbar />


      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
  <div className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-80 h-32">
    <div className="bg-white rounded-full p-4">
      <FaPhone size={30} color="#1D24CA" />
    </div>
    <div className="ml-4">
      <h5 className="text-lg font-bold text-white mb-1">Phone</h5>
      <p className="text-gray-200 text-xl">+91-99494 77535</p>
      <p className="text-gray-200 text-xl">+91-88979 77763</p>
    </div>
  </div>

  <div className="flex items-center bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-80 h-32">
    <div className="bg-white rounded-full p-4">
      <IoLogoWhatsapp size={30} color="#25D366" />
    </div>
    <div className="ml-4">
      <h5 className="text-lg font-bold text-white mb-1">WhatsApp</h5>
      <p className="text-gray-200 text-xl">+91-99494 77535</p>
    </div>
  </div>

  <div className="flex items-center bg-gradient-to-r from-orange-600 to-red-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-80   h-32">
    <div className="bg-white rounded-full p-4">
      <FaEnvelope size={30} color="red" />
    </div>
    <div className="ml-4">
  <h5 className="text-lg font-bold text-white mb-1">Email</h5>
  <h5
    className="text-gray-200 text-md "
  >
 cfimission.marteru@gmail.com
   </h5>
</div>
  </div>
</div>

<div className="flex justify-center gap-8 mt-8">
  <Link
    href="https://www.youtube.com/channel/UCqL8AioSE_S4AAPgUVe1SJw"
    className="flex items-center justify-center bg-red-100 rounded-full p-4 hover:bg-red-200 transition-colors duration-300"
  >
    <FaYoutube size={30} className="text-red-600" />
  </Link>
  <Link
    href="https://www.instagram.com/cfi_mission?igsh=ZW5jeG94ajdxM3Y="
    className="flex items-center justify-center bg-pink-100 rounded-full p-4 hover:bg-pink-200 transition-colors duration-300"
  >
    <Icon icon="ri:instagram-line" width={30} className="text-pink-600" />
  </Link>
  <Link
    href="https://www.facebook.com/profile.php?id=100079778833071"
    className="flex items-center justify-center bg-blue-100 rounded-full p-4 hover:bg-blue-200 transition-colors duration-300"
  >
    <FaFacebook size={30} className="text-blue-600" />
  </Link>
  <Link
    href="https://zoom.us/join"
    className="flex items-center justify-center bg-blue-100 rounded-full p-4 hover:bg-blue-200 transition-colors duration-300"
  >
    <FaVideo size={30} className="text-blue-600" />
  </Link>
</div>


      {/* contact form */}

      <div id="from">
        <ContactForm />
      </div>

      <div className="flex flex-col justify-cente md:items-center m-5 gap-5">
        <div className="md:w-1/2">
          <h1 className=" font-bold text-4xl text-[#1D24CA] uppercase pb-5">
            Address
          </h1>
          <h5 className="font-bold text-lg text-[#1D24CA] uppercase">
            MARTERU Branch
          </h5>
          <p className="text-2xl font-lg">
            {" "}
            CFI MISSION CHURCH, D.No 5-2, VANAMPALLI, MARTERU <br /> WEST
            GODAVARI DIST, ANDHRA PRADESH. PINCODE - 534 122
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.0076048716014!2d81.7365567!3d16.626387500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37c528895a06db%3A0xacc7fcb2f3539233!2zQ0ZJIE1JU1NJT04gQ0hVUkNIIOCwuOCwvy7gsI7gsKvgsY0u4LCQIOCwruCwv-Cwt-CwqOCxjSDgsJrgsLDgsY3gsJrgsL8!5e0!3m2!1sen!2sin!4v1707819177048!5m2!1sen!2sin"
            className="w-full h-64"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h5 className="font-bold text-lg text-[#1D24CA] pt-5  uppercase">
            PALAKOLLU Branch
          </h5>
          <p className="text-2xl font-lg">
            CFI MISSION CHURCH, PARVATHI NAGAR, CHERUVUPETA PALAKOLLU
            <br />
            WEST GODAVARI DIST, ANDHRA PRADESH. PINCODE - 534 260
          </p>
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
  );
};

export default Contact;
