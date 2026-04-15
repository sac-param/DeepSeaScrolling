import React from 'react';
import { SeaCreature } from '../types';

interface CreatureCardProps {
  creature: SeaCreature;
  index: number;
}

const sizeClassMap = {
  Micro: 'w-8 md:w-12',
  Small: 'w-20 md:w-32',
  Big: 'w-28 md:w-48',
  Large: 'w-36 md:w-64',
} as const;

const CreatureCard: React.FC<CreatureCardProps> = ({ creature, index }) => {
  const imageUrl = creature.imageUrl;

  const column = index % 3;
  const row = Math.floor(index / 3);

  // More spread out - prevents overlap
const columnOffsets = [
  [8, 22, 38],   // left group
  [50, 65],      // center group  
  [78, 92],      // right group
];

  // ✅ Only fix: use each group's own length instead of hardcoded 4
  const group = columnOffsets[column % columnOffsets.length];
  const horizontalOffset = group[row % group.length];

  const imageSizeClass =
    sizeClassMap[
      (creature.sizeCategory as keyof typeof sizeClassMap) || 'Small'
    ] || sizeClassMap.Small;

  return (
    <div
      className="absolute flex flex-col items-center group"
      style={{
        left: `${horizontalOffset}%`,
        transform: 'translateX(-50%)',
        width: 'max-content',
        maxWidth: '22%',
      }}
    >
      {/* Image */}
      <div className="relative mb-2 transition-transform duration-500 hover:scale-110 cursor-pointer animate-[float_6s_ease-in-out_infinite]">
        <img
          src={imageUrl}
          alt={creature.name}
          className={`object-contain ${imageSizeClass} drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]`}
          style={{
            mixBlendMode: 'normal',
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://via.placeholder.com/300x200?text=${encodeURIComponent(creature.name)}`;
          }}
        />
      </div>

      {/* Text */}
      <div className="text-center relative z-10 max-w-[110px] md:max-w-[170px] px-1">
        <h3 className="text-[11px] md:text-lg font-bold text-white uppercase tracking-widest leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-80 group-hover:opacity-100 transition-opacity break-words">
          {creature.name}
        </h3>
        <p className="text-[10px] md:text-xs text-cyan-200 font-mono mt-1 opacity-60 drop-shadow-md">
          {creature.depth}m
        </p>
      </div>
    </div>
  );
};

export default CreatureCard;