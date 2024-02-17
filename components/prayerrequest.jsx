import React from 'react'

const PrayerRequest = ({ onContactFormOpen }) => {
    return (
      <div className="flex justify-center gap-5 items-center flex-col pb-10">
        <h1 className="text-4xl font-bold">Prayer Request</h1>
        <button
          type="button"
          onClick={onContactFormOpen}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-20 py-2.5 text-center me-2 mb-2 animate-bounce"
        >
          Send
        </button>
      </div>
    );
  };

export default PrayerRequest