import React, { useMemo } from 'react';

const BubbleEffect: React.FC = () => {
  // Generate bubbles once on mount
  const bubbles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position 0-100%
      size: 3 + Math.random() * 6, // Random size 3-9px
      duration: 15 + Math.random() * 20, // Slow duration 15-35s
      delay: -(Math.random() * 35), // Negative delay to start mid-animation
      opacity: 0.1 + Math.random() * 0.3
    }));
  }, []);

  return (
    // Fixed container ensures bubbles move independently of scroll
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            // Inline styles for randomized animation properties
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