import React, { useState } from "react";

function Home() {

  return (
    <div className="bg-[#121212] text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Welcome to ChatApp
        </h1>
        <p className="text-lg mb-8 text-center">
          Connect with your friends and the world around you.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
