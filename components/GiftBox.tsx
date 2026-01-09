
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center justify-center cursor-pointer group"
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-transform duration-500 transform ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {/* Gift Box SVG Representation */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 gift-bounce">
          {/* Lid */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-12 bg-pink-600 rounded-t-lg shadow-md z-10 transition-all duration-700 group-hover:-translate-y-8">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
                <div className="w-16 h-8 bg-pink-400 rounded-full flex items-center justify-center border-4 border-pink-600">
                    <Heart className="text-white fill-current w-4 h-4" />
                </div>
             </div>
          </div>
          {/* Box Body */}
          <div className="absolute bottom-0 left-0 w-full h-40 sm:h-52 bg-pink-400 rounded-b-lg shadow-inner overflow-hidden flex items-center justify-center">
             <div className="w-8 h-full bg-pink-600 absolute left-1/2 -translate-x-1/2"></div>
             <div className="w-full h-8 bg-pink-600 absolute top-1/2 -translate-y-1/2"></div>
             <div className="z-10 text-white font-bold text-lg sm:text-xl text-center px-4">
                Klik Untuk Kejutan!
             </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-pink-600 font-medium animate-pulse text-lg">Sentuh kado ini, Sayang! ✨</p>
    </div>
  );
};

export default GiftBox;
