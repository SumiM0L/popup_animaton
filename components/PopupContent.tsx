import React from "react";

interface PopupProps {
  onClose: () => void;
}

const PopupContent: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-r from-black to-gray-800 p-4 rounded shadow-lg relative animate-fade-in">
        <button
          className="absolute top-1 right-1 px-3 py-1 bg-transparent-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl mt-6 mb-4 text-white">Welcome to Our Tech Hub!</h2>
        <p className="text-lg mb-6 text-white">
          Get ready to dive into the world of technology!
          <span role="img" aria-label="tech" className="ml-2">
            💻
          </span>
        </p>
        <div className="flex items-center justify-center">
          <button className="px-4 py-2 bg-transparent border border-white text-white rounded-lg shadow-md hover:bg-white hover:text-black transition-colors duration-300 mr-4 animate-bounce">
            Explore Now
          </button>
          <button className="px-4 py-2 bg-transparent border border-white text-white rounded-lg shadow-md hover:bg-white hover:text-black transition-colors duration-300 animate-bounce">
            Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupContent;
