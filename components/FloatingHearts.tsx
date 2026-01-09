
import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-[-50px] text-pink-300 opacity-60"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
            animation: `float ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
