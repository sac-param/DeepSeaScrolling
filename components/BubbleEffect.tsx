import React, { useMemo } from 'react';

const BubbleEffect: React.FC = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 3 + Math.random() * 6,
      duration: 15 + Math.random() * 20,
      delay: -(Math.random() * 35),
      opacity: 0.1 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble absolute"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(BubbleEffect);