'use client'
import Link from 'next/link';
import React from 'react'
const PrayerRequest = () => {
    return (
      <div className="flex justify-center gap-5 items-center flex-col pb-10">
        <h1 className="text-4xl font-bold">Prayer Request</h1>
        <Link
          type="button"
          href='/contact'
          className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-20 py-2.5 text-center me-2 mb-2 animate-bounce"
        >
          Send
        </Link>
      </div>
    );
  };

export default PrayerRequest