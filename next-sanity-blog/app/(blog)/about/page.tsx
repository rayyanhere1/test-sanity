import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Main About Section */}
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <h2 className="text-xl font-semibold text-purple-700 mb-6">
          Muhammad Rayyan
        </h2>
        <p className="text-gray-600 leading-7">
          Welcome to my blog! I am passionate about crafting beautiful and
          functional websites that offer a seamless user experience. My
          expertise includes modern web technologies and frameworks to ensure
          scalability and performance. This platform is designed to share my
          journey, experiences, and tips with the community.
        </p>
      </div>

    </div>
  );
};

export default About;
