import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="w-full max-w-sm flex flex-col items-center justify-center p-5 rounded-lg shadow-md bg-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <img src={image} alt={title} className="w-16 h-16 mb-3 transition-transform duration-300 hover:scale-110" />
      <p className="text-lg md:text-xl font-semibold text-black text-center">{title}</p>
      <p className="text-sm md:text-base text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Card;
