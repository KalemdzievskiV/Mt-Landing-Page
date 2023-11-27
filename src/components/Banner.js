import React from 'react';
import Image from '../assets/Main.jpg';
import { Button } from '@mui/material';

const Banner = () => {
  const randomText = "MT Center Squaire";
  const paragraphText = "Discover luxurious apartments for your next stay.";

  return (
    <div className="relative h-screen">
      <img
        src={Image}
        alt="Background"
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-4xl font-bold shadow-lg">
          {randomText}
        </div>
        <p className="mt-4 text-lg">{paragraphText}</p>
      </div>
    </div>
  );
}

export default Banner;
