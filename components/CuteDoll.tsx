
import React from 'react';

const CuteDoll: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40 pointer-events-none sm:bottom-10 sm:right-10 animate-bounce">
      {/* Container for a cute doll/character (GIF-based for best "cute" effect) */}
      <div className="relative group">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3NueXF4NnZ6NnZ6NnZ6NnZ6NnZ6NnZ6NnZ6NnZ6NnZ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/L4lvBpHWOnOIn6m39v/giphy.gif" 
          alt="Cute Doll" 
          className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-xl"
        />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-pink-500 text-[10px] font-bold px-2 py-1 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          I Love You! ❤️
        </div>
      </div>
    </div>
  );
};

export const CuteDollLeft: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 z-40 pointer-events-none sm:bottom-10 sm:left-10 animate-pulse">
      <div className="relative">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3NueXF4NnZ6NnZ6NnZ6NnZ6NnZ6NnZ6NnZ6NnZ6NnZ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/kZ1p8iZ1wX4R2/giphy.gif" 
          alt="Cute Bear" 
          className="w-20 h-20 sm:w-28 sm:h-28 drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default CuteDoll;
