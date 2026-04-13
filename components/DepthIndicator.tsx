import React from 'react';

interface DepthIndicatorProps {
  currentDepth: number;
}

const DepthIndicator: React.FC<DepthIndicatorProps> = ({ currentDepth }) => {
  return (
    <div className="fixed top-6 right-6 z-50 bg-black/60 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-mono text-3xl font-bold shadow-lg tracking-wider">
      {Math.round(currentDepth)} m
    </div>
  );
};

export default DepthIndicator;