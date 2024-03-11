'use client'
import Link from 'next/link';
import React from 'react'
const PrayerRequest = () => {
    return (
      <div className="flex justify-center gap-5 items-center flex-col pb-10">
        <Link
          type="button"
          href='/contact#from'
          className="text-[#1D24CA]font-bold bg-gradient-to-r from-[#98ABEE]  to-[#1D24CA]   text-lg rounded-lg  px-20  py-5 text-center me-2 mb-2 animate-bounce"
        >
          Send Prayer Request
        </Link>
      </div>
    );
  };

export default PrayerRequest