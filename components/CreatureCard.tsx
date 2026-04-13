import React from 'react';
import { SeaCreature } from '../types';

interface CreatureCardProps {
  creature: SeaCreature;
  index: number;
}

const lanePositions = ['8%', '26%', '44%', '62%', '80%'];
const laneNudges = [-18, 12, -8, 18, -12];

const sizeClassMap = {
  Micro: 'w-8 md:w-10',
  Small: 'w-16 md:w-24',
  Big: 'w-24 md:w-36',
  Large: 'w-32 md:w-48',
} as const;

const CreatureCard: React.FC<CreatureCardProps> = ({ creature, index }) => {
  const imageUrl = creature.imageUrl;
  const lane = index % lanePositions.length;

  const imageSizeClass =
    sizeClassMap[
      (creature.sizeCategory as keyof typeof sizeClassMap) || 'Small'
    ] || sizeClassMap.Small;

  return (
    <div
      className="absolute group pointer-events-auto"
      style={{
        left: lanePositions[lane],
        transform: `translate(-50%, ${laneNudges[lane]}px)`,
        width: 'max-content',
        zIndex: 10 + lane,
      }}
    >
      <div className="flex flex-col items-center">
        {/* Image */}
        <div className="relative mb-1 transition-transform duration-500 hover:scale-110 cursor-pointer animate-[float_6s_ease-in-out_infinite]">
          <img
            src={imageUrl}
            alt={creature.name}
            className={`object-contain ${imageSizeClass} drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]`}
            style={{
              mixBlendMode: 'normal',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://via.placeholder.com/300x200?text=${encodeURIComponent(creature.name)}`;
            }}
          />
        </div>

        {/* Text */}
        <div className="text-center relative z-10 max-w-[110px] md:max-w-[180px]">
          <h3 className="text-[10px] md:text-base font-bold text-white uppercase tracking-widest leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-80 group-hover:opacity-100 transition-opacity">
            {creature.name}
          </h3>

          <p className="text-[9px] md:text-xs text-cyan-200 font-mono mt-1 opacity-70 drop-shadow-md">
            {creature.depth}m
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatureCard;