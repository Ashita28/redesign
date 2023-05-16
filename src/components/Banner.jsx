import React from 'react';
import island from '../utils/island.mp4';
import '../dark.css';

const Banner = () => {
  return (
    <div className="relative mt-0 mb-10%">
      <div className="relative">
        <video className="sticky top-0 left-0 h-50% object-cover" autoPlay loop muted>
          <source src={island} type="video/mp4" />
        </video>
        <div className="absolute inset-0">
          <div className="h-full w-full backdrop-blur-s backdrop-filter bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>
      </div>
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 backdrop-blur-sm backdrop-filter text-white z-10">
        <h1 className="flex-1">Redefine Status</h1>
        <div className="flex items-center bg-black rounded">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-transparent text-white rounded-l outline-none"
          />
          <button className="px-4 py-2">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M13.71 12.29a1 1 0 0 1-1.42 1.42l-3-3a1 1 0 0 1 1.42-1.42l3 3zM11 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="absolute inset-40 flex flex-col justify-center z-20">
        <h2 className="text-white text-4xl font-bold">How We Can Correct <br/>Mankind’s Leaderboard</h2>
        <p className="text-white mt-4">
          The fact that our designer goods do not represent wealth for
           positive utility is having more negative <br/> damage to society than we can fathom. 
           This article is going to help detail why, and detail our solution in progress.
        </p>
        <button className="text-white text-lg bg-black-500 px-4 py-2 mt-4 rounded">
          Read More
          <svg
            className="w-4 h-4 inline-block ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7" ></path>
            </svg>
        </button>
      </div>
    </div>
  )
}

export default Banner
