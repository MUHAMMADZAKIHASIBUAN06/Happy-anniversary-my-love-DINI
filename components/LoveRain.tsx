
import React, { useEffect, useState } from 'react';

interface LoveDrop {
  id: number;
  left: string;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
}

const LoveRain: React.FC = () => {
  const [drops, setDrops] = useState<LoveDrop[]>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      size: Math.random() * 20 + 10,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-red-400 select-none"
          style={{
            top: '-50px',
            left: drop.left,
            fontSize: `${drop.size}px`,
            opacity: drop.opacity,
            animation: `fall ${drop.duration}s linear infinite`,
            animationDelay: `${drop.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(110vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoveRain;
